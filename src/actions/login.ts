'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function login(formData: FormData) {
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        console.error('Error user sign in: ', error);
        throw error;
    }

    redirect('/');
}
