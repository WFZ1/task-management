import { TasksTable } from './tasks-table';
import getTasks from '@/actions/get-tasks';

export const Tasks = async () => {
    const data = await getTasks();

    return <TasksTable data={data ?? []} />;
};
