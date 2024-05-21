import { FormControl, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';

interface Field {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormInputProps {
    label: string;
    placeholder: string;
    field: Field;
}

export const FormInput = ({ label, placeholder, field }: FormInputProps) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
                <Input placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
        </FormItem>
    );
};
