import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { RecentScans } from '@/components/recent-scans';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { columns } from '@/components/tables/employee-tables/columns';
import { client, databases } from '@/lib/appwrite';
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
import { Employee } from '@/constants/data';
import { Models, Query } from '@/lib/appwrite';
import { CarouselCards } from '@/components/carousel-cards';
export default async function page() {
  const page = 1;
  const pageLimit = 25;

  const res = await databases.listDocuments('carouselDb1', 'id1collection', [
    Query.orderDesc('$createdAt')
  ]);
  const totalUsers = res.total;
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const employee: Models.Document[] = res.documents;

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            RAPL - CAROUSEL 1
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
            {/* <></> */}
            <CarouselCards />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Scans</CardTitle>
                  <CardDescription>Realtime Scan Data</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentScans
                    searchKey="country"
                    pageNo={page}
                    columns={columns}
                    totalUsers={totalUsers}
                    data={employee}
                    pageCount={pageCount}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
