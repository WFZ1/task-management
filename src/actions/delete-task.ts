'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const supabase = createClient();

export default async function deleteTask(taskId: Task['id']) {
    const { error } = await supabase.from('tasks').delete().eq('id', taskId);

    if (error) {
        console.error('Error deleting task: ', error);
        return;
    }

    revalidatePath('/tasks');
}
