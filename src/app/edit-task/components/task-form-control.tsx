'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TaskForm } from '@/components/task-form/task-form';
import { format } from 'date-fns';
import { Task, TaskFields } from '@/types';
import { DATE_FORMAT } from '@/constants';
import { useTransition } from 'react';
import updateTask from '@/actions/update-task';
import { taskFormSchema } from '@/components/task-form/task-form-schema';

interface TaskFormControlProps {
    task: Task;
}

export const TaskFormControl = ({ task }: TaskFormControlProps) => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<TaskFields>({
        resolver: zodResolver(taskFormSchema),
        defaultValues: {
            title: task.title,
            description: task.description,
            deadline: new Date(task.deadline),
            priority: task.priority,
        },
    });

    const handleSubmit = (values: TaskFields) => {
        const formattedValues = {
            ...values,
            deadline: format(values.deadline, DATE_FORMAT),
        };

        startTransition(async () => {
            await updateTask(task.id, formattedValues);
        });
    };

    return <TaskForm form={form} onSubmit={handleSubmit} />;
};
