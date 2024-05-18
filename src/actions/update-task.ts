'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function updateTask(taskId: Task['id'], taskData: Omit<Task, 'id' | 'isCompleted'>) {
    const supabase = createClient();
    const { error } = await supabase.from('tasks').update(taskData).eq('id', taskId);

    if (error) {
        console.error('Error updating task: ', error);
        throw error;
    }

    revalidatePath('/tasks');
    revalidatePath(`/edit-task`);
    redirect('/tasks');
}
