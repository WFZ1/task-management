import Link from 'next/link';
import { Metadata } from 'next';
import { Task } from './components/task';

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
            <Link href="/">Home</Link>
            <Task id={searchParams.id} />
        </>
    );
}
