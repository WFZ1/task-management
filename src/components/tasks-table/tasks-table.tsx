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
import { DataTable } from '@/components/ui/data-table/data-table';
import { Task } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableRowActions } from '@/components/ui/data-table/data-table-row-actions';
import deleteTask from '@/actions/delete-task';
import completeTask from '@/actions/complete-task';
import { useRouter } from 'next/navigation';

interface TasksTableProps {
    data: Task[];
}

export function TasksTable({ data }: TasksTableProps) {
    const [tasks, setTasks] = useState<Task[]>(data);
    const router = useRouter();

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    const toggleTaskCompletion = useCallback(
        async (taskId: Task['id'], isCompleted: Task['isCompleted']) => {
            const updatedTasks = tasks.map((task) => {
                if (task.id !== taskId) {
                    return task;
                }

                return { ...task, isCompleted: isCompleted };
            });

            await completeTask(taskId, isCompleted);
            setTasks(updatedTasks);
        },
        [tasks]
    );

    const handleTaskDeletion = useCallback(
        async (taskId: Task['id']) => {
            const updatedTasks = tasks.filter((task) => task.id !== taskId);

            await deleteTask(taskId);
            setTasks(updatedTasks);
        },
        [tasks]
    );

    const enhancedColumns: ColumnDef<Task>[] = useMemo(() => {
        return columns.map((column: ColumnDef<Task>) => {
            if (column.id === 'isCompleted') {
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
            } else if (column.id === 'actions') {
                return {
                    ...column,
                    cell: ({ row }: { row: Row<Task> }) => (
                        <DataTableRowActions
                            onDelete={() => handleTaskDeletion(row.original.id)}
                            onEdit={() => router.push(`/edit-task?id=${row.original.id}`)}
                        />
                    ),
                };
            }

            return column;
        });
    }, [toggleTaskCompletion, handleTaskDeletion, router]);

    const table = useReactTable({
        data: tasks,
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
