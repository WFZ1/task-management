import { TasksTable } from './tasks-table';
import { createClient } from '@/utils/supabase/server';
import { Task } from '@/types';

export const Tasks = async () => {
    const supabase = createClient();
    const { data }: { data: Task[] | null } = await supabase.from('tasks').select();

    return <TasksTable data={data ?? []} />;
};
