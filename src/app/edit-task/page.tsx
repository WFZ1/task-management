import Link from 'next/link';
import { Metadata } from 'next';
import { Task } from '@/components/edit-task/task';
import { AuthButton } from '@/components/auth-button/auth-button';

export const metadata: Metadata = {
    title: 'Edit Task',
    description: 'Edit Task',
};

interface SearchParams {
    id?: string;
}

interface TaskProps {
    searchParams: SearchParams;
}

export default function UpdateTaskPage({ searchParams }: TaskProps) {
    return (
        <>
            <AuthButton />
            <Link href="/">Home</Link>
            <Task id={searchParams.id} />
        </>
    );
}
