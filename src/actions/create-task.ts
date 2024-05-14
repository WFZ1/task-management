'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const supabase = createClient();

export default async function createTask(task: Omit<Task, 'id' | 'isCompleted'>) {
    const { error } = await supabase.from('tasks').insert(task);

    if (error) {
        console.error('Error inserting task to db: ', error);
        return;
    }

    revalidatePath('/tasks');
}
