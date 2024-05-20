import { ColumnDef } from '@tanstack/react-table';
import { PRIORITIES } from '@/constants';
import { DataTableColumnWithSorting } from '../ui/data-table/data-table-column-with-sorting';
import { DataTableCellWithIcon } from '../ui/data-table/data-table-cell-with-icon';
import { FunctionComponent } from 'react';
import { Task } from '@/types';

export const columns: ColumnDef<Task>[] = [
    {
        id: 'isCompleted',
        accessorKey: 'isCompleted',
        header: 'Completed',
        filterFn: (row, id, value) => {
            return value.includes(String(row.getValue(id)));
        },
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
    },
];
