'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { SupabaseQueryResponse } from '@/utils/supabase/types';

export default async function getTask(taskId: Task['id']): Promise<Task | null | undefined> {
    const supabase = createClient();
    const { data, error }: SupabaseQueryResponse<Task> = await supabase
        .from('tasks')
        .select()
        .eq('id', taskId)
        .single();

    if (error) {
        console.error('Error getting task: ', error);
        throw error;
    }

    return data;
}
