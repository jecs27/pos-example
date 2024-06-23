'use client';
import { areaChartProps } from '@/types';
import { AreaChart, Card } from '@tremor/react';

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export function AreaChartComponent(chartData: areaChartProps) {
  return (
    <Card>
      <AreaChart
        className="h-60"
        data={chartData.data}
        index={chartData.index}
        categories={chartData.categories}
        colors={chartData.colors}
        valueFormatter={chartData.valueFormatter}
        yAxisWidth={60}
      />
    </Card>
  );
}