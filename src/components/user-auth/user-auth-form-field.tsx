import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputHTMLAttributes } from 'react';

interface UserAuthFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const UserAuthFormField = ({ label, ...inputProps }: UserAuthFormFieldProps) => {
    return (
        <>
            <Label className="sr-only" htmlFor={inputProps.id}>
                {label}
            </Label>
            <Input {...inputProps} />
        </>
    );
};
