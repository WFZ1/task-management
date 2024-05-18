'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TaskForm } from '@/components/task-form/task-form';
import { format } from 'date-fns';
import { TaskFields } from '@/types';
import { DATE_FORMAT } from '@/constants';
import createTask from '@/actions/create-task';
import { useTransition } from 'react';
import { taskFormSchema } from '@/components/task-form/task-form-schema';

export const TaskFormControl = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<TaskFields>({
        resolver: zodResolver(taskFormSchema),
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
