'use client';

import { useCallback, useMemo, useState, useTransition } from 'react';
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
import { DataTableRowActions } from './data-table-row-actions';
import deleteTask from '@/actions/delete-task';

interface TasksTableProps {
    data: Task[];
}

export function TasksTable({ data }: TasksTableProps) {
    const [tasks, setTasks] = useState<Task[]>(data);
    const [isPending, startTransition] = useTransition();

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    const toggleTaskCompletion = useCallback(
        (taskId: Task['id'], isCompleted: Task['isCompleted']) => {
            const updatedTasks = tasks.map((task) => {
                if (task.id !== taskId) {
                    return task;
                }

                return { ...task, isCompleted: isCompleted };
            });

            setTasks(updatedTasks);
        },
        [tasks, setTasks]
    );

    const handleTaskDeletion = useCallback((taskId: Task['id']) => {
        startTransition(async () => {
            await deleteTask(taskId);
        });
    }, []);

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
                        <DataTableRowActions onDelete={() => handleTaskDeletion(row.original.id)} />
                    ),
                };
            }

            return column;
        });
    }, [toggleTaskCompletion, handleTaskDeletion]);

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
