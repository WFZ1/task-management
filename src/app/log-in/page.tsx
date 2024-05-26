import { Metadata } from 'next';
import { LogIn } from '@/components/log-in/log-in';

export const metadata: Metadata = {
    title: 'Log in',
    description: 'Log in',
};

interface SearchParams {
    message?: string;
}

interface LogInPageProps {
    searchParams: SearchParams;
}

export default function LogInPage({ searchParams }: LogInPageProps) {
    return <LogIn message={searchParams?.message} />;
}
