'use client';

import { useFormStatus } from 'react-dom';
import { SubmitButton } from '@/components/ui/submit-button';
import { UserAuthFormFields } from './user-auth-form-fields';

interface UserAuthFormBodyProps {
    buttonText: string;
    formAction(formData: FormData): void;
}

export const UserAuthFormBody = ({ buttonText, formAction }: UserAuthFormBodyProps) => {
    const { pending, action } = useFormStatus();

    return (
        <>
            <UserAuthFormFields isLoading={pending} />
            <SubmitButton formAction={formAction} pending={pending} action={action}>
                {buttonText}
            </SubmitButton>
        </>
    );
};
