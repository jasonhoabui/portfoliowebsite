import { NextResponse } from 'next/server';
import { createClient, RedisClientType } from 'redis';
import fs from 'fs/promises';
import path from 'path';

type VisitorCountResponse = {
  count: number;
  source: string;
  message?: string;
};

// File path for local fallback counter
const COUNTER_FILE_PATH = path.join(process.cwd(), 'data', 'visitor-count.txt');

// Function to get and increment local file counter
async function getAndIncrementLocalCounter(): Promise<number> {
  try {
    // Create data directory if it doesn't exist
    await fs.mkdir(path.join(process.cwd(), 'data'), { recursive: true });
    
    // Try to read the current count
    let count = 1;
    try {
      const data = await fs.readFile(COUNTER_FILE_PATH, 'utf-8');
      count = parseInt(data.trim(), 10) + 1;
      if (isNaN(count)) count = 1;
    } catch (_) {
      // File doesn't exist yet, start with 1
      count = 1;
    }
    
    // Write the incremented count back
    await fs.writeFile(COUNTER_FILE_PATH, count.toString(), 'utf-8');
    
    return count;
  } catch (err) {
    console.error('Error with local counter:', err);
    // If all else fails, return a static number
    return 42;
  }
}

export async function GET() {
  // Check if Redis URL is configured
  if (!process.env.REDIS_URL) {
    console.warn('REDIS_URL not configured, using local file counter');
    const localCount = await getAndIncrementLocalCounter();
    return NextResponse.json({ 
      count: localCount, 
      source: 'local-file' 
    } as VisitorCountResponse);
  }
  
  let redisClient: RedisClientType | null = null;
  
  try {
    // Create Redis client with short timeout
    redisClient = createClient({
      url: process.env.REDIS_URL,
      socket: {
        connectTimeout: 2000,
        reconnectStrategy: false
      }
    });
    
    redisClient.on('error', (err) => {
      console.error('Redis client error:', err);
    });
    
    await redisClient.connect();
    
    // Increment the visitor count
    const count = await redisClient.incr('visitorCount');
    
    return NextResponse.json({ 
      count, 
      source: 'redis' 
    } as VisitorCountResponse);
  } catch (err: unknown) {
    console.error('Redis error, falling back to local counter:', err);
    
    // Use local file counter as fallback
    const localCount = await getAndIncrementLocalCounter();
    
    return NextResponse.json({ 
      count: localCount, 
      source: 'local-file',
      message: 'Using file-based count due to Redis unavailability' 
    } as VisitorCountResponse);
  } finally {
    if (redisClient?.isOpen) {
      try {
        await redisClient.disconnect();
      } catch (err) {
        console.error('Error disconnecting Redis:', err);
      }
    }
  }
}