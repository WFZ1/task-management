'use server';

import { Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { SupabaseQueryResponse } from '@/utils/supabase/types';

const supabase = createClient();

export default async function getTasks(): Promise<Task[] | null | undefined> {
    const { data, error }: SupabaseQueryResponse<Task[]> = await supabase.from('tasks').select();

    if (error) {
        console.error('Error getting tasks: ', error);
        return;
    }

    return data;
}
