'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import {
  BankrollSession,
  formatChartMonth,
  formatCurrency,
  getMonthTickDates,
  parseBankrollCsv,
  prepareYearChartSessions,
} from '@/lib/bankroll';

const CHART_YEAR = 2026;

type ChartPoint = BankrollSession & {
  monthLabel: string;
};

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: ChartPoint }[];
}) {
  if (!active || !payload?.length) return null;

  const point = payload[0].payload;
  const date = new Date(`${point.date}T12:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="rounded-md border border-gray-200 bg-white px-3 py-2 text-xs shadow-sm">
      <p className="text-gray-400">{date}</p>
      <p className="text-black font-medium">{formatCurrency(point.cumulative)}</p>
      <p className="text-gray-500">
        {point.profit >= 0 ? '+' : ''}
        {formatCurrency(point.profit)} · {point.stakes}
      </p>
    </div>
  );
}

export default function BankrollChart() {
  const [sessions, setSessions] = useState<BankrollSession[]>([]);

  useEffect(() => {
    fetch('/data/bankroll.csv')
      .then((res) => res.text())
      .then((text) => setSessions(parseBankrollCsv(text)))
      .catch((err) => console.error('Failed to load bankroll data:', err));
  }, []);

  const data = useMemo<ChartPoint[]>(() => {
    const yearSessions = prepareYearChartSessions(sessions, CHART_YEAR);
    return yearSessions.map((session) => ({
      ...session,
      monthLabel: formatChartMonth(session.date),
    }));
  }, [sessions]);

  const tickDates = useMemo(() => getMonthTickDates(data), [data]);
  const lastDate = data[data.length - 1]?.date;
  const lastMonth = lastDate?.slice(0, 7);

  const formatXTick = (value: string) => {
    if (value === lastDate) return 'present';
    if (!tickDates.has(value)) return '';
    if (value.slice(0, 7) === lastMonth) return '';
    return formatChartMonth(value);
  };

  if (!data.length) return null;

  return (
    <div className="w-full flex flex-col">
      <p className="text-xs text-gray-400 mb-2">profits · {CHART_YEAR}</p>
      <div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3 pt-4">
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <ReferenceLine y={0} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fill: '#9ca3af', fontSize: 10 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              interval="preserveStartEnd"
              tickFormatter={formatXTick}
            />
            <YAxis
              tick={{ fill: '#9ca3af', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={48}
              tickFormatter={(value) => formatCurrency(value)}
            />
            <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#d1d5db', strokeWidth: 1 }} />
            <Line
              type="monotone"
              dataKey="cumulative"
              stroke="#111111"
              strokeWidth={1.5}
              dot={false}
              isAnimationActive
              animationDuration={1400}
              animationBegin={200}
              animationEasing="ease-out"
              activeDot={{ r: 3, fill: '#111111', stroke: '#fff', strokeWidth: 1 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
