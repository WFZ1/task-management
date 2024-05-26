// import getUser from '@/actions/get-user';
import signOut from '@/actions/sign-out';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export const AuthButton = async () => {
    // TODO: figure out why I get error due to code below
    // const user = await getUser();

    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return (
            <Link href="/log-in" className="py-2 px-3 flex rounded-md no-underline bg-secondary">
                Log in
            </Link>
        );
    }

    return (
        <div className="flex items-center gap-4">
            Hey, {user?.email}!
            <form action={signOut}>
                <button className="py-2 px-4 rounded-md no-underline bg-secondary">Log out</button>
            </form>
        </div>
    );
};
