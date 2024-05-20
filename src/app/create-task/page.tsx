import Link from 'next/link';
import { TaskFormControl } from '@/components/create-task/task-form-control';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Task',
    description: 'Create Task',
};

export default function CreateTaskPage() {
    return (
        <>
            <Link href="/">Home</Link>
            <TaskFormControl />
        </>
    );
}
