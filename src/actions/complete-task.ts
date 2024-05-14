'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const supabase = createClient();

export default async function completeTask(taskId: Task['id'], isCompleted: Task['isCompleted']) {
    const { error } = await supabase.from('tasks').update({ isCompleted }).eq('id', taskId);

    if (error) {
        console.error('Error completing task: ', error);
        return;
    }

    revalidatePath('/tasks');
}
