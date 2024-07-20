'use client';
import { Scans } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Scans>[] = [
  {
    accessorKey: 'unit',
    header: 'UNIT'
  },
  {
    accessorKey: 'qrCode',
    header: 'QR CODE'
  },
  {
    accessorKey: 'status',
    header: 'STATUS'
  }
];
