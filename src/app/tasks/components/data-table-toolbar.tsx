'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DATE_FORMAT, PRIORITIES } from '../constants';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DatePicker } from '@/components/date-picker';
import { format } from 'date-fns';

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter tasks by title..."
                    value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
                    onChange={(event) => table.getColumn('title')?.setFilterValue(event.target.value)}
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                <DatePicker
                    placeholder="Pick a date"
                    value={
                        table.getColumn('deadline')?.getFilterValue()
                            ? new Date(table.getColumn('deadline')?.getFilterValue() as string)
                            : undefined
                    }
                    onChange={(value) => {
                        table.getColumn('deadline')?.setFilterValue(value && format(value, DATE_FORMAT));
                    }}
                />

                <DataTableFacetedFilter column={table.getColumn('priority')} title="Priority" options={PRIORITIES} />
                {isFiltered && (
                    <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
                        Reset
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
