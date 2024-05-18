import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { TaskFormFields } from './task-form-fields';
import { TaskFields } from '@/types';

interface TaskFormProps {
    form: UseFormReturn<TaskFields>;
    onSubmit(values: TaskFields): void;
}

export const TaskForm = ({ form, onSubmit }: TaskFormProps) => {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <TaskFormFields control={form.control} />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};
