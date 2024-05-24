'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

interface SignUpData {
    email: string;
    password: string;
}

const signUp = async (formData: FormData) => {
    const data = normalizeData(formData);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp(data);

    if (error) {
        throw error;
    }
};

const normalizeData = (formData: FormData): SignUpData => {
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    return data;
};

const errorHandling = async (formData: FormData) => {
    try {
        await signUp(formData);
        return '/sign-up?message=Check email to continue sign in process';
    } catch (error) {
        console.error('Error user sign up: ', error);
        return '/sign-up?message=Could not authenticate user';
    }
};

// NextJS docs says: redirect internally throws an error so it should be called outside of try/catch blocks.
const handleRedirect = async (formData: FormData) => {
    const url = await errorHandling(formData);
    redirect(url);
};

export default handleRedirect;
