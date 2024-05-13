import Link from 'next/link';
import { Form } from './form';

export default function CreateTaskPage() {
    return (
        <>
            <Link href="/">Home</Link>
            <Form />
        </>
    );
}
