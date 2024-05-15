'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const supabase = createClient();

export default async function updateTask(taskId: Task['id'], taskData: Omit<Task, 'id' | 'isCompleted'>) {
    const { error } = await supabase.from('tasks').update(taskData).eq('id', taskId);

    if (error) {
        console.error('Error updating task: ', error);
        return;
    }

    revalidatePath('/tasks');
    revalidatePath(`/edit-task?id=${taskId}`);
}
