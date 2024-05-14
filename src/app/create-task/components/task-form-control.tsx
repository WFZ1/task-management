'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TaskForm } from '@/app/create-task/components/task-form';
import { format } from 'date-fns';
import { TaskFields } from '@/types';
import { DATE_FORMAT } from '@/constants';
import createTask from '@/actions/create-task';
import { useTransition } from 'react';

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

export const TaskFormControl = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<TaskFields>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
        },
    });

    const handleSubmit = (values: TaskFields) => {
        const formattedValues = {
            ...values,
            deadline: format(values.deadline, DATE_FORMAT),
        };

        startTransition(async () => {
            await createTask(formattedValues);
        });
    };

    return <TaskForm form={form} onSubmit={handleSubmit} />;
};
