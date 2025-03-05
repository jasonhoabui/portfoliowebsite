import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'data', 'visitorCount.json');

  // Read the current count
  let count = 0;
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    count = JSON.parse(data).count;
  } catch (error) {
    console.error('Error reading visitor count:', error);
  }

  // Increment the count
  count += 1;

  // Write the new count back to the file
  fs.writeFileSync(filePath, JSON.stringify({ count }));

  // Return the current count
  res.status(200).json({ count });
}