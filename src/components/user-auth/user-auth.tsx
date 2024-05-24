import { UserAuthFormBody } from '@/components/user-auth/user-auth-form-body';
import { UserAuthForm } from './user-auth-form';
import { UserAuthAlert } from './user-auth-alert';
import { UserAuthHeader } from './user-auth-header';

interface UserAuthProps {
    title: string;
    description: string;
    message?: string;
    buttonText: string;
    onSubmit(formData: FormData): void;
}

export default function UserAuth({ title, description, message, buttonText, onSubmit }: UserAuthProps) {
    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <UserAuthHeader title={title} description={description} />
            </div>
            <div className={'grid gap-6'}>
                <UserAuthForm>
                    <div className="grid gap-2">
                        <UserAuthFormBody buttonText={buttonText} formAction={onSubmit} />
                    </div>
                </UserAuthForm>
            </div>
            <UserAuthAlert message={message} />
        </>
    );
}
