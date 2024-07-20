'use client';
import { Scans } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Scans>[] = [
  {
    accessorKey: 'first_name',
    header: 'UNIT'
  },
  {
    accessorKey: 'country',
    header: 'QR CODE'
  },
  {
    accessorKey: 'email',
    header: 'STATUS'
  }
];
