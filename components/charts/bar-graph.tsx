'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'Date Wise Clinching Details';

const chartData = [
  {
    date: '2024-04-01',
    carousel1: 222,
    carousel2: 150,
    carousel3: 150,
    carousel4: 150
  },
  {
    date: '2024-04-02',
    carousel1: 97,
    carousel2: 180,
    carousel3: 180,
    carousel4: 180
  },
  {
    date: '2024-04-03',
    carousel1: 105,
    carousel2: 200,
    carousel3: 200,
    carousel4: 200
  },
  {
    date: '2024-04-04',
    carousel1: 120,
    carousel2: 220,
    carousel3: 220,
    carousel4: 220
  },
  {
    date: '2024-04-05',
    carousel1: 130,
    carousel2: 240,
    carousel3: 240,
    carousel4: 240
  },
  {
    date: '2024-04-06',
    carousel1: 140,
    carousel2: 260,
    carousel3: 260,
    carousel4: 260
  },
  {
    date: '2024-04-07',
    carousel1: 150,
    carousel2: 280,
    carousel3: 280,
    carousel4: 280
  },
  {
    date: '2024-04-08',
    carousel1: 160,
    carousel2: 300,
    carousel3: 300,
    carousel4: 300
  },
  {
    date: '2024-04-09',
    carousel1: 170,
    carousel2: 320,
    carousel3: 320,
    carousel4: 320
  },
  {
    date: '2024-04-10',
    carousel1: 180,
    carousel2: 340,
    carousel3: 340,
    carousel4: 340
  },
  {
    date: '2024-04-11',
    carousel1: 190,
    carousel2: 360,
    carousel3: 360,
    carousel4: 360
  },
  {
    date: '2024-04-12',
    carousel1: 200,
    carousel2: 380,
    carousel3: 380,
    carousel4: 380
  },
  {
    date: '2024-04-13',
    carousel1: 210,
    carousel2: 400,
    carousel3: 400,
    carousel4: 400
  },
  {
    date: '2024-04-14',
    carousel1: 220,
    carousel2: 420,
    carousel3: 420,
    carousel4: 420
  }
];

const chartConfig = {
  views: {
    label: 'Cylinders Processed'
  },
  carousel1: {
    label: 'carousel1',
    color: 'hsl(var(--chart-1))'
  },
  carousel2: {
    label: 'carousel2',
    color: 'hsl(var(--chart-2))'
  },
  carousel3: {
    label: 'carousel3',
    color: 'hsl(var(--chart-1))'
  },
  carousel4: {
    label: 'carousel4',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('carousel1');

  const total = React.useMemo(
    () => ({
      carousel1: chartData.reduce((acc, curr) => acc + curr.carousel1, 0),
      carousel2: chartData.reduce((acc, curr) => acc + curr.carousel2, 0),
      carousel3: chartData.reduce((acc, curr) => acc + curr.carousel3, 0),
      carousel4: chartData.reduce((acc, curr) => acc + curr.carousel4, 0)
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Clinching Graph</CardTitle>
          <CardDescription>
            Showing total cylinders processed in each carousel
          </CardDescription>
        </div>
        <div className="flex">
          {['carousel1', 'carousel2', 'carousel3', 'carousel4'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
