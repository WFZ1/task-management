'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { PRIORITIES } from '@/constants';
import { DataTableColumnWithSorting } from './data-table-column-with-sorting';
import { DataTableRowActions } from './data-table-row-actions';
import { DataTableCellWithIcon } from './data-table-cell-with-icon';
import { FunctionComponent } from 'react';
import { Task } from '@/types';

export const columns: ColumnDef<Task>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'description',
        header: 'Description',
    },
    {
        accessorKey: 'deadline',
        header: ({ column }) => {
            return <DataTableColumnWithSorting column={column} title="Deadline" />;
        },
        filterFn: (row, id, value) => {
            return value === row.getValue(id);
        },
    },
    {
        accessorKey: 'priority',
        header: ({ column }) => <DataTableColumnWithSorting column={column} title="Priority" />,
        cell: ({ row }) => {
            const priority = PRIORITIES.find((priority) => priority.value === row.getValue('priority'));

            if (!priority) {
                return null;
            }

            return <DataTableCellWithIcon icon={priority.icon as FunctionComponent} label={priority.label} />;
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        id: 'actions',
        cell: () => <DataTableRowActions />,
    },
];
