import { createClient } from './supabase/server';

export const checkUserAuth = async (): Promise<boolean> => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();

    const isAuth = !error && Boolean(data?.user);
    return isAuth;
};
