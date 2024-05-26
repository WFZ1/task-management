'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { SignUpWithPasswordCredentials } from '@supabase/auth-js';

const signUp = async (formData: FormData) => {
    const data = normalizeData(formData);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp(data as unknown as SignUpWithPasswordCredentials);

    if (error) {
        throw error;
    }
};

const normalizeData = (formData: FormData): Record<string, string> => {
    const data: Record<string, string> = {};

    for (const [key, value] of formData) {
        data[key] = value as string;
    }

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
