'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { SignInWithPasswordCredentials } from '@supabase/auth-js';

const logIn = async (formData: FormData) => {
    const data = normalizeData(formData);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword(data as unknown as SignInWithPasswordCredentials);

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

const errorHandling = async (formData: FormData): Promise<string> => {
    try {
        await logIn(formData);
        return '/';
    } catch (error) {
        console.error('Error user sign in: ', error);
        return '/log-in?message=Could not authenticate user';
    }
};

// NextJS docs says: redirect internally throws an error so it should be called outside of try/catch blocks.
const handleRedirect = async (formData: FormData) => {
    const url = await errorHandling(formData);
    redirect(url);
};

export default handleRedirect;
