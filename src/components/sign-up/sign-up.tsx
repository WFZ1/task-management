import signUp from '@/actions/sign-up';
import UserAuth from '@/components/user-auth/user-auth';
import { UserAuthPersonQuote } from '@/components/user-auth/user-auth-person-quote';
import { UserAuthLink } from '@/components/user-auth/user-auth-link';

interface SignUpProps {
    message?: string;
}

export const SignUp = ({ message }: SignUpProps) => {
    return (
        <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <UserAuthLink href="/log-in" className="absolute right-4 top-4 md:right-8 md:top-8">
                Log In
            </UserAuthLink>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <UserAuthPersonQuote
                    corporation="Acme Inc"
                    quote="This app has saved me countless hours of work and helped me deliver stunning results
                            to my clients faster than ever before."
                    author="Unknown Person"
                />
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <UserAuth
                        title="Create an account"
                        description="Please enter your email and password below"
                        message={message}
                        buttonText="Sign Up"
                        onSubmit={signUp}
                    />
                </div>
            </div>
        </div>
    );
};
