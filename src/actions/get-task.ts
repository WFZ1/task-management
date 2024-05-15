'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { SupabaseQueryResponse } from '@/utils/supabase/types';

const supabase = createClient();

export default async function getTask(taskId: Task['id']): Promise<Task | null | undefined> {
    const { data, error }: SupabaseQueryResponse<Task[]> = await supabase.from('tasks').select().eq('id', taskId);

    if (error) {
        console.error('Error getting task: ', error);
        return;
    }

    return data?.[0];
}
