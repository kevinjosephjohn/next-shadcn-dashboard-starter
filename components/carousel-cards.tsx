'use client';

import React from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { client, databases, Models } from '@/lib/appwrite';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function CarouselCards({}) {
  const [carousel1Pass, setCarousel1Pass] = React.useState(0);
  const [carousel1Fail, setCarousel1Fail] = React.useState(0);

  const [carousel4Pass, setCarousel4Pass] = React.useState(0);
  const [carousel4Fail, setCarousel4Fail] = React.useState(0);

  const [visionUnitPass, setVisionUnitPass] = React.useState(0);
  const [visionUnitFail, setVisionUnitFail] = React.useState(0);

  React.useEffect(() => {
    client.subscribe('documents', (response) => {
      if (response.payload.unit == 'id1') {
        if (response.payload.status == true) {
          setCarousel1Pass((prevCarousel1Pass) => {
            const newPassCount = prevCarousel1Pass + 1;
            return newPassCount;
          });
        } else {
          setCarousel1Fail((prevCarousel1Fail) => {
            const newFailCount = prevCarousel1Fail + 1;
            return newFailCount;
          });
        }
      } else if (response.payload.unit == 'id4') {
        if (response.payload.status == true) {
          setCarousel4Pass((prevCarousel4Pass) => {
            const newPassCount = prevCarousel4Pass + 1;
            return newPassCount;
          });
        } else {
          setCarousel4Fail((prevCarousel4Fail) => {
            const newFailCount = prevCarousel4Fail + 1;
            return newFailCount;
          });
        }
      } else if (response.payload.unit == 'visionunit') {
        if (response.payload.status == true) {
          setVisionUnitPass((prevVisionUnitPass) => {
            const newPassCount = prevVisionUnitPass + 1;
            return newPassCount;
          });
        } else {
          setVisionUnitFail((prevVisionUnitFail) => {
            const newFailCount = prevVisionUnitFail + 1;
            return newFailCount;
          });
        }
      }
    });
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">ID 1 PASS</CardTitle>
          <CardTitle className="text-sm font-medium">ID 1 FAIL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-2xl font-bold text-success">
              {carousel1Pass}
            </div>
            <div className="text-2xl font-bold text-success">
              {carousel1Fail}
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-warning">
            Accuracy: 95%
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">VU PASS</CardTitle>
          <CardTitle className="text-sm font-medium">VU FAIL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-2xl font-bold text-success">
              {visionUnitPass}
            </div>
            <div className="text-2xl font-bold text-success">
              {visionUnitFail}
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-warning">
            Accuracy: 95%
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">ID 4 PASS</CardTitle>
          <CardTitle className="text-sm font-medium">ID 4 FAIL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-2xl font-bold text-success">
              {carousel4Pass}
            </div>
            <div className="text-2xl font-bold text-success">
              {carousel4Fail}
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-warning">
            Accuracy: 95%
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
