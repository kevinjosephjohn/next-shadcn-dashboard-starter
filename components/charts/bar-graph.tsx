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

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-04-01', carousel1: 222, carousel2: 150, carousel3: 150 },
  { date: '2024-04-02', carousel1: 97, carousel2: 180 },
  { date: '2024-04-03', carousel1: 167, carousel2: 120 },
  { date: '2024-04-04', carousel1: 242, carousel2: 260 },
  { date: '2024-04-05', carousel1: 373, carousel2: 290 },
  { date: '2024-04-06', carousel1: 301, carousel2: 340 },
  { date: '2024-04-07', carousel1: 245, carousel2: 180 },
  { date: '2024-04-08', carousel1: 409, carousel2: 320 },
  { date: '2024-04-09', carousel1: 59, carousel2: 110 },
  { date: '2024-04-10', carousel1: 261, carousel2: 190 },
  { date: '2024-04-11', carousel1: 327, carousel2: 350 },
  { date: '2024-04-12', carousel1: 292, carousel2: 210 },
  { date: '2024-04-13', carousel1: 342, carousel2: 380 },
  { date: '2024-04-14', carousel1: 137, carousel2: 220 },
  { date: '2024-04-15', carousel1: 120, carousel2: 170 },
  { date: '2024-04-16', carousel1: 138, carousel2: 190 },
  { date: '2024-04-17', carousel1: 446, carousel2: 360 },
  { date: '2024-04-18', carousel1: 364, carousel2: 410 },
  { date: '2024-04-19', carousel1: 243, carousel2: 180 },
  { date: '2024-04-20', carousel1: 89, carousel2: 150 },
  { date: '2024-04-21', carousel1: 137, carousel2: 200 },
  { date: '2024-04-22', carousel1: 224, carousel2: 170 },
  { date: '2024-04-23', carousel1: 138, carousel2: 230 },
  { date: '2024-04-24', carousel1: 387, carousel2: 290 },
  { date: '2024-04-25', carousel1: 215, carousel2: 250 },
  { date: '2024-04-26', carousel1: 75, carousel2: 130 },
  { date: '2024-04-27', carousel1: 383, carousel2: 420 },
  { date: '2024-04-28', carousel1: 122, carousel2: 180 },
  { date: '2024-04-29', carousel1: 315, carousel2: 240 },
  { date: '2024-04-30', carousel1: 454, carousel2: 380 },
  { date: '2024-05-01', carousel1: 165, carousel2: 220 },
  { date: '2024-05-02', carousel1: 293, carousel2: 310 },
  { date: '2024-05-03', carousel1: 247, carousel2: 190 },
  { date: '2024-05-04', carousel1: 385, carousel2: 420 },
  { date: '2024-05-05', carousel1: 481, carousel2: 390 },
  { date: '2024-05-06', carousel1: 498, carousel2: 520 },
  { date: '2024-05-07', carousel1: 388, carousel2: 300 },
  { date: '2024-05-08', carousel1: 149, carousel2: 210 },
  { date: '2024-05-09', carousel1: 227, carousel2: 180 },
  { date: '2024-05-10', carousel1: 293, carousel2: 330 },
  { date: '2024-05-11', carousel1: 335, carousel2: 270 },
  { date: '2024-05-12', carousel1: 197, carousel2: 240 },
  { date: '2024-05-13', carousel1: 197, carousel2: 160 },
  { date: '2024-05-14', carousel1: 448, carousel2: 490 },
  { date: '2024-05-15', carousel1: 473, carousel2: 380 },
  { date: '2024-05-16', carousel1: 338, carousel2: 400 },
  { date: '2024-05-17', carousel1: 499, carousel2: 420 },
  { date: '2024-05-18', carousel1: 315, carousel2: 350 },
  { date: '2024-05-19', carousel1: 235, carousel2: 180 },
  { date: '2024-05-20', carousel1: 177, carousel2: 230 },
  { date: '2024-05-21', carousel1: 82, carousel2: 140 },
  { date: '2024-05-22', carousel1: 81, carousel2: 120 },
  { date: '2024-05-23', carousel1: 252, carousel2: 290 },
  { date: '2024-05-24', carousel1: 294, carousel2: 220 },
  { date: '2024-05-25', carousel1: 201, carousel2: 250 },
  { date: '2024-05-26', carousel1: 213, carousel2: 170 },
  { date: '2024-05-27', carousel1: 420, carousel2: 460 },
  { date: '2024-05-28', carousel1: 233, carousel2: 190 },
  { date: '2024-05-29', carousel1: 78, carousel2: 130 },
  { date: '2024-05-30', carousel1: 340, carousel2: 280 },
  { date: '2024-05-31', carousel1: 178, carousel2: 230 },
  { date: '2024-06-01', carousel1: 178, carousel2: 200 },
  { date: '2024-06-02', carousel1: 470, carousel2: 410 },
  { date: '2024-06-03', carousel1: 103, carousel2: 160 },
  { date: '2024-06-04', carousel1: 439, carousel2: 380 },
  { date: '2024-06-05', carousel1: 88, carousel2: 140 },
  { date: '2024-06-06', carousel1: 294, carousel2: 250 },
  { date: '2024-06-07', carousel1: 323, carousel2: 370 },
  { date: '2024-06-08', carousel1: 385, carousel2: 320 },
  { date: '2024-06-09', carousel1: 438, carousel2: 480 },
  { date: '2024-06-10', carousel1: 155, carousel2: 200 },
  { date: '2024-06-11', carousel1: 92, carousel2: 150 },
  { date: '2024-06-12', carousel1: 492, carousel2: 420 },
  { date: '2024-06-13', carousel1: 81, carousel2: 130 },
  { date: '2024-06-14', carousel1: 426, carousel2: 380 },
  { date: '2024-06-15', carousel1: 307, carousel2: 350 },
  { date: '2024-06-16', carousel1: 371, carousel2: 310 },
  { date: '2024-06-17', carousel1: 475, carousel2: 520 },
  { date: '2024-06-18', carousel1: 107, carousel2: 170 },
  { date: '2024-06-19', carousel1: 341, carousel2: 290 },
  { date: '2024-06-20', carousel1: 408, carousel2: 450 },
  { date: '2024-06-21', carousel1: 169, carousel2: 210 },
  { date: '2024-06-22', carousel1: 317, carousel2: 270 },
  { date: '2024-06-23', carousel1: 480, carousel2: 530 },
  { date: '2024-06-24', carousel1: 132, carousel2: 180 },
  { date: '2024-06-25', carousel1: 141, carousel2: 190 },
  { date: '2024-06-26', carousel1: 434, carousel2: 380 },
  { date: '2024-06-27', carousel1: 448, carousel2: 490 },
  { date: '2024-06-28', carousel1: 149, carousel2: 200 },
  { date: '2024-06-29', carousel1: 103, carousel2: 160 },
  { date: '2024-06-30', carousel1: 446, carousel2: 400 }
];

const chartConfig = {
  views: {
    label: 'Page Views'
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
      carousel3: chartData.reduce((acc, curr) => acc + curr.carousel2, 0)
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['carousel1', 'carousel2', 'carousel3'].map((key) => {
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
