import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import { FormInput } from '@/components/form-input';
import { FormDatePicker } from '@/components/form-date-picker';
import { FormSelect } from '@/components/form-select';
import { PRIORITIES } from '@/constants';

interface TaskFormProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    onSubmit(values: T): void;
}

export const TaskForm = <T extends FieldValues>({ form, onSubmit }: TaskFormProps<T>) => {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name={'title' as Path<T>}
                    render={({ field }) => <FormInput label="Title" placeholder="Task 1" field={field} />}
                />
                <FormField
                    control={form.control}
                    name={'description' as Path<T>}
                    render={({ field }) => <FormInput label="Description" placeholder="Details" field={field} />}
                />
                <FormField
                    control={form.control}
                    name={'deadline' as Path<T>}
                    render={({ field }) => <FormDatePicker label="Deadline" placeholder="Pick a date" field={field} />}
                />
                <FormField
                    control={form.control}
                    name={'priority' as Path<T>}
                    render={({ field }) => (
                        <FormSelect
                            label="Priority"
                            placeholder="Select a priority"
                            field={field}
                            options={PRIORITIES}
                        />
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};
