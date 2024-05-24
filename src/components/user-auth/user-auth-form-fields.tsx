import { UserAuthFormField } from '@/components/user-auth/user-auth-form-field';

interface UserAuthFormFieldsProps {
    isLoading: boolean;
}

export const UserAuthFormFields = ({ isLoading }: UserAuthFormFieldsProps) => {
    return (
        <>
            <div className="grid gap-1">
                <UserAuthFormField
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    required
                    disabled={isLoading}
                />
            </div>
            <div className="grid gap-1">
                <UserAuthFormField
                    label="Password"
                    id="password"
                    name="password"
                    placeholder="******"
                    type="password"
                    required
                    disabled={isLoading}
                />
            </div>
        </>
    );
};
