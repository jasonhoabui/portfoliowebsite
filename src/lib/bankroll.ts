export type BankrollSession = {
  date: string;
  profit: number;
  cumulative: number;
  stakes: string;
  location: string;
};

export function parseBankrollCsv(text: string): BankrollSession[] {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];

  return lines.slice(1).map((line) => {
    const match = line.match(
      /^([^,]+),(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?),"((?:[^"]|"")*)","((?:[^"]|"")*)"$/
    );
    if (!match) {
      throw new Error(`Invalid bankroll CSV row: ${line}`);
    }

    return {
      date: match[1],
      profit: parseFloat(match[2]),
      cumulative: parseFloat(match[3]),
      stakes: match[4].replace(/""/g, '"'),
      location: match[5].replace(/""/g, '"'),
    };
  });
}

export function formatChartDate(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
}

export function formatChartMonth(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);
  return date
    .toLocaleDateString('en-US', { month: 'short' })
    .toLowerCase();
}

export function prepareYearChartSessions(
  sessions: BankrollSession[],
  year: number
): BankrollSession[] {
  const filtered = sessions
    .filter((s) => s.date.startsWith(`${year}-`))
    .sort((a, b) => a.date.localeCompare(b.date));

  let cumulative = 0;
  return filtered.map((session) => {
    cumulative += session.profit;
    return { ...session, cumulative };
  });
}

export function getMonthTickDates(sessions: BankrollSession[]): Set<string> {
  const ticks = new Set<string>();
  let lastMonth = '';

  for (const session of sessions) {
    const month = session.date.slice(0, 7);
    if (month !== lastMonth) {
      ticks.add(session.date);
      lastMonth = month;
    }
  }

  return ticks;
}

export function formatCurrency(value: number) {
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return value < 0 ? `-$${formatted}` : `$${formatted}`;
}
