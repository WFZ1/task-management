import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/tasks/header';
import { Tasks } from '@/components/tasks/tasks';
import { AuthButton } from '@/components/auth-button/auth-button';

export const metadata: Metadata = {
    title: 'Tasks',
    description: 'A task tracker',
};

export default function TasksPage() {
    return (
        <>
            <AuthButton />
            <Link href="/">Home</Link>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <Header />
                <Tasks />
            </div>
        </>
    );
}
