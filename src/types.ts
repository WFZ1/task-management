import { ComponentType } from 'react';

export interface Task {
    id: string;
    title: string;
    description: string;
    deadline: string;
    priority: string;
}

export interface Option {
    label: string;
    value: string;
    icon?: ComponentType<{ className?: string }>;
}
