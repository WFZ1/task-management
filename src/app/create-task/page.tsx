import Link from 'next/link';
import { TaskFormControl } from '@/components/create-task/task-form-control';
import { Metadata } from 'next';
import { AuthButton } from '@/components/auth-button/auth-button';

export const metadata: Metadata = {
    title: 'Create Task',
    description: 'Create Task',
};

export default function CreateTaskPage() {
    return (
        <>
            <AuthButton />
            <Link href="/">Home</Link>
            <TaskFormControl />
        </>
    );
}
