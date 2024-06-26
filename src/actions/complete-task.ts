'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export default async function completeTask(taskId: Task['id'], isCompleted: Task['isCompleted']) {
    const supabase = createClient();
    const { error } = await supabase.from('tasks').update({ isCompleted }).eq('id', taskId);

    if (error) {
        console.error('Error completing task: ', error);
        throw error;
    }

    revalidatePath('/tasks');
}
