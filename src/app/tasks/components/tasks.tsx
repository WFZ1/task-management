'use client';

import { useEffect, useState } from 'react';
import { TasksTable } from './tasks-table';
import { createClient } from '@/utils/supabase/client';
import { Task } from '@/types';

export const Tasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const supabase = createClient();

        supabase
            .from('tasks')
            .select()
            .then(({ data }: { data: Task[] | null }) => setTasks(data ?? []));
    }, []);

    return <TasksTable data={tasks} onUpdateData={setTasks} />;
};
