import { Button } from '@/components/ui/button';
import { Column } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

interface DataTableColumnWithSortingProps<TData, TValue> {
    column: Column<TData, TValue>;
    title: string;
}

export const DataTableColumnWithSorting = <TData, TValue>({
    column,
    title,
}: DataTableColumnWithSortingProps<TData, TValue>) => {
    return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            {title}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    );
};
