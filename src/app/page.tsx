import { AuthButton } from '@/components/auth-button/auth-button';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <AuthButton />
            <Link href="create-task">Create Task</Link>
            <Link href="tasks">Tasks</Link>
        </main>
    );
}
