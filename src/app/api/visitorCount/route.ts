import { NextResponse } from 'next/server';
import Redis from 'redis';

const redisClient = Redis.createClient({
  url: process.env.REDIS_URL,
});

export async function GET() {
  try {
    await redisClient.connect();

    // Increment the visitor count
    const count = await redisClient.incr('visitorCount');

    // Return the current count
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return NextResponse.json(
      { error: 'Failed to update visitor count' },
      { status: 500 }
    );
  } finally {
    await redisClient.quit();
  }
}