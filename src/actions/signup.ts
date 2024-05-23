'use server';

import { createClient } from '@/utils/supabase/server';

export default async function signup(formData: FormData) {
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const supabase = createClient();
    const { error } = await supabase.auth.signUp(data);

    if (error) {
        console.error('Error user sign up: ', error);
        throw error;
    }
}
