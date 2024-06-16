import { Card } from '@tremor/react';

export function CardData({ title, value }) {
  return (
    <Card className="mx-auto max-w-xs" decoration="top" decorationColor="green" >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{title}</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{value}</p>
    </Card>
  );
}