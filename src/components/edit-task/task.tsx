import getTask from '@/actions/get-task';
import { TaskFormControl } from './task-form-control';

interface TaskProps {
    id?: string;
}

export const Task = async ({ id }: TaskProps) => {
    if (!id) {
        return <div>Task id was not provided</div>;
    }

    const task = await getTask(id);

    if (!task) {
        return <div>Task not found</div>;
    }

    return <TaskFormControl task={task} />;
};
