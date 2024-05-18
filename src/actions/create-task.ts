'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function createTask(task: Omit<Task, 'id' | 'isCompleted'>) {
    const supabase = createClient();
    const { error } = await supabase.from('tasks').insert(task);

    if (error) {
        console.error('Error inserting task to db: ', error);
        throw error;
    }

    revalidatePath('/tasks');
    redirect('/tasks');
}
