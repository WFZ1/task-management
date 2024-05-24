import { Metadata } from 'next';
import { SignUp } from '@/components/sign-up/sign-up';

export const metadata: Metadata = {
    title: 'Sign up',
    description: 'Sign up',
};

interface SearchParams {
    message?: string;
}

interface SignUpPageProps {
    searchParams: SearchParams;
}

export default function SignUpPage({ searchParams }: SignUpPageProps) {
    return <SignUp message={searchParams?.message} />;
}
