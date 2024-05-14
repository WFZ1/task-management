import { TasksTable } from './tasks-table';
import { createClient } from '@/utils/supabase/server';
import { Task } from '@/types';
import { cookies } from 'next/headers';

export const Tasks = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data }: { data: Task[] | null } = await supabase.from('tasks').select();

    return <TasksTable data={data ?? []} />;
};
