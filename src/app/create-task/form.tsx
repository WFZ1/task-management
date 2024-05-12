'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TaskForm } from '@/app/create-task/task-form';

const formSchema = z.object({
    title: z.string().min(2, {
        message: 'Title must be at least 2 characters.',
    }),
    description: z.string().min(1, {
        message: 'Description must be at least 2 characters.',
    }),
    deadline: z.date(),
    priority: z.string(),
});

export const Form = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return <TaskForm form={form} onSubmit={handleSubmit} />;
};
