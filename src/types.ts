import { ComponentType } from 'react';

export interface Task {
    id: string;
    title: string;
    description: string;
    deadline: string;
    priority: string;
    isCompleted: boolean;
}

export type TaskFields = Pick<Task, 'title' | 'description' | 'priority'> & { deadline: Date };

export interface Option {
    label: string;
    value: string;
    icon?: ComponentType<{ className?: string }>;
}
