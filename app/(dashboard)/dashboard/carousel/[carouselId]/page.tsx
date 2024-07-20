'use client';
import { AreaGraph } from '@/components/charts/area-graph';
import { BarGraph } from '@/components/charts/bar-graph';
import { PieGraph } from '@/components/charts/pie-graph';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useParams, useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            RAPL - IOCL Dashboard
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card onClick={() => router.push(`/carousel1`)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    ID 1 PASS
                  </CardTitle>
                  <CardTitle className="text-sm font-medium">
                    ID 1 FAIL
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="text-2xl font-bold text-success">325</div>
                    <div className="text-2xl font-bold text-success">325</div>
                  </div>
                  <p className="text-xs text-muted-foreground text-warning">
                    Accuracy: 95%
                  </p>
                </CardContent>
              </Card>
              <Card onClick={() => router.push(`/carousel1`)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">VU PASS</CardTitle>
                  <CardTitle className="text-sm font-medium">VU FAIL</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="text-2xl font-bold text-success">325</div>
                    <div className="text-2xl font-bold text-success">325</div>
                  </div>
                  <p className="text-xs text-muted-foreground text-warning">
                    Accuracy: 95%
                  </p>
                </CardContent>
              </Card>
              <Card onClick={() => router.push(`/carousel1`)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    ID 4 PASS
                  </CardTitle>
                  <CardTitle className="text-sm font-medium">
                    ID 4 FAIL
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="text-2xl font-bold text-success">325</div>
                    <div className="text-2xl font-bold text-success">325</div>
                  </div>
                  <p className="text-xs text-muted-foreground text-warning">
                    Accuracy: 95%
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Scans</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
