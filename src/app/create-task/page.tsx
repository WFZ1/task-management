import Link from 'next/link';
import { TaskFormControl } from './components/task-form-control';

export default function CreateTaskPage() {
    return (
        <>
            <Link href="/">Home</Link>
            <TaskFormControl />
        </>
    );
}
