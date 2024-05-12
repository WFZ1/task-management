import { ControllerProps, ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

interface Field {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputFieldProps {
    label: string;
    placeholder: string;
    field: Field;
}

export const InputField = ({ label, placeholder, field }: InputFieldProps) => {
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
