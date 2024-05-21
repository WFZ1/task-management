import { FormControl, FormItem, FormLabel, FormMessage } from './form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Option } from '@/types';

interface Field {
    value: string;
    onChange: (value: string) => void;
}

// TODO: rewrite 'options: Option[];' as 'options: T;'
interface FormSelectProps {
    label: string;
    placeholder: string;
    field: Field;
    options: Option[];
}

export const FormSelect = ({ label, placeholder, field, options }: FormSelectProps) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <FormMessage />
        </FormItem>
    );
};
