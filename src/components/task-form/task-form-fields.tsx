import { Control } from 'react-hook-form';
import { FormField } from '@/components/ui/form';
import { FormInput } from '@/components/ui/form-input';
import { FormDatePicker } from '@/components/ui/form-date-picker';
import { FormSelect } from '@/components/ui/form-select';
import { PRIORITIES } from '@/constants';
import { TaskFields } from '@/types';

interface TaskFormFieldsProps {
    control: Control<TaskFields>;
}

export const TaskFormFields = ({ control }: TaskFormFieldsProps) => {
    return (
        <>
            <FormField
                control={control}
                name={'title'}
                render={({ field }) => <FormInput label="Title" placeholder="Task 1" field={field} />}
            />
            <FormField
                control={control}
                name={'description'}
                render={({ field }) => <FormInput label="Description" placeholder="Details" field={field} />}
            />
            <FormField
                control={control}
                name={'deadline'}
                render={({ field }) => <FormDatePicker label="Deadline" placeholder="Pick a date" field={field} />}
            />
            <FormField
                control={control}
                name={'priority'}
                render={({ field }) => (
                    <FormSelect label="Priority" placeholder="Select a priority" field={field} options={PRIORITIES} />
                )}
            />
        </>
    );
};
