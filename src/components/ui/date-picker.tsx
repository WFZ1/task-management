import { Button } from './button';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { cn } from '@/lib/utils';
import { SelectSingleEventHandler } from 'react-day-picker';

interface DatePickerProps {
    placeholder: string;
    value?: Date;
    onChange: SelectSingleEventHandler;
}

// TODO: pass disabled prop for calendar
const TODAY = new Date();
const NEXT_YEAR = new Date(new Date().setFullYear(TODAY.getFullYear() + 1));

export const DatePicker = ({ placeholder, value, onChange }: DatePickerProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {value ? format(value, 'PPP') : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    disabled={(date) => date < TODAY || date > NEXT_YEAR}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};
