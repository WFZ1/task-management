'use client';

import { useCallback, useMemo, useState } from 'react';
import {
    ColumnDef,
    ColumnFiltersState,
    Row,
    SortingState,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { columns } from './tasks-columns';
import { DataTable } from './data-table';
import { Task } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';

interface TasksTableProps {
    data: Task[];
    onUpdateData(data: Task[]): void;
}

export function TasksTable({ data, onUpdateData }: TasksTableProps) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    const toggleTaskCompletion = useCallback(
        (taskId: string, isCompleted: boolean) => {
            const updatedTasks = data.map((task) => {
                if (task.id !== taskId) {
                    return task;
                }

                return { ...task, isCompleted: isCompleted };
            });

            onUpdateData(updatedTasks);
        },
        [data, onUpdateData]
    );

    const enhancedColumns: ColumnDef<Task>[] = useMemo(() => {
        return columns.map((column: ColumnDef<Task>) => {
            if (column.id !== 'isCompleted') {
                return column;
            }

            return {
                ...column,
                cell: ({ row }: { row: Row<Task> }) => (
                    <Checkbox
                        checked={row.getValue('isCompleted')}
                        onCheckedChange={(value: boolean) => toggleTaskCompletion(row.original.id, value)}
                        aria-label="Mark task as completed / uncompleted"
                        className="translate-y-[2px]"
                    />
                ),
            };
        });
    }, [toggleTaskCompletion]);

    const table = useReactTable({
        data,
        columns: enhancedColumns,
        state: {
            sorting,
            columnFilters,
        },
        enableRowSelection: true,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return <DataTable table={table} columnsLength={columns.length} />;
}
