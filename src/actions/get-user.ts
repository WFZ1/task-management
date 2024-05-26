'use server';

import { createClient } from '@/utils/supabase/server';

interface User {
    email?: string;
}

export default async function getUser(): Promise<User | null> {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
        console.error('Error getting user: ', error);
        throw error;
    }

    return data.user;
}
