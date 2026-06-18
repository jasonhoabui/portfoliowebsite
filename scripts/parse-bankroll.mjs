import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(__dirname, 'bankroll-raw.txt'), 'utf8');
const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);

const sessions = [];
let i = 0;

while (i < lines.length) {
  if (/^\d{4}$/.test(lines[i])) {
    i++;
    continue;
  }

  const stakes = lines[i++];
  const profitLine = lines[i++];
  const location = lines[i++];
  const date = lines[i++];

  if (!stakes || !profitLine || !location || !date) break;

  const profit = profitLine.replace(/[$,]/g, '');
  sessions.push({ date, profit, stakes, location });
}

sessions.sort((a, b) => new Date(a.date) - new Date(b.date));

let cumulative = 0;
const rows = ['date,profit,cumulative,stakes,location'];

for (const s of sessions) {
  const p = parseFloat(s.profit);
  cumulative += p;
  const isoDate = new Date(s.date).toISOString().slice(0, 10);
  const escapedLocation = `"${s.location.replace(/"/g, '""')}"`;
  const escapedStakes = `"${s.stakes.replace(/"/g, '""')}"`;
  rows.push(`${isoDate},${p},${cumulative.toFixed(2)},${escapedStakes},${escapedLocation}`);
}

const outDir = join(__dirname, '../public/data');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'bankroll.csv'), rows.join('\n'));
console.log(`Wrote ${sessions.length} sessions`);
