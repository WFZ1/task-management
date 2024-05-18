import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Task Management',
    description: 'Task Management',
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Link href="create-task">Create Task</Link>
            <Link href="tasks">Tasks</Link>
        </main>
    );
}
