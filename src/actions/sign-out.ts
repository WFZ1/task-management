'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const signOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
        throw error;
    }

    redirect('/log-in');
};

export default signOut;
