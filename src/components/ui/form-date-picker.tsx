import { Button } from './button';
import { FormControl, FormItem, FormLabel, FormMessage } from './form';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { cn } from '@/lib/utils';
import { SelectSingleEventHandler } from 'react-day-picker';

interface Field {
    value?: Date;
    onChange: SelectSingleEventHandler;
}

interface FormDatePickerProps {
    label: string;
    placeholder: string;
    field: Field;
}

// TODO: pass disabled prop for calendar
const TODAY = new Date();
const NEXT_YEAR = new Date(new Date().setFullYear(TODAY.getFullYear() + 1));

export const FormDatePicker = ({ label, placeholder, field }: FormDatePickerProps) => {
    return (
        <FormItem className="flex flex-col">
            <FormLabel>{label}</FormLabel>
            <Popover>
                <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                            variant={'outline'}
                            className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                            )}
                        >
                            {field.value ? format(field.value, 'PPP') : <span>{placeholder}</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < TODAY || date > NEXT_YEAR}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <FormMessage />
        </FormItem>
    );
};
