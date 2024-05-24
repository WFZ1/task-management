import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import { checkUserAuth } from './utils/checkUserAuth';

const PUBLIC_ROUTES = ['/log-in', '/sign-up', '/error'];
const MAIL_CONFIRMING_ROUTE = '/auth/confirm';

export const middleware = async (request: NextRequest) => {
    const isAuth = await checkUserAuth();

    const isUserHasNotAccess = !PUBLIC_ROUTES.includes(request?.nextUrl?.pathname) && !isAuth;
    const isUserLoggedIn = PUBLIC_ROUTES.includes(request?.nextUrl?.pathname) && isAuth;
    const isMailConfirmingRoute = request?.nextUrl?.pathname === MAIL_CONFIRMING_ROUTE;

    if (isMailConfirmingRoute) {
        return;
    }

    if (isUserHasNotAccess) {
        return NextResponse.redirect(new URL('/log-in', request.url));
    }

    if (isUserLoggedIn) {
        await updateSession(request);
        return NextResponse.redirect(new URL('/tasks', request.url));
    }

    return await updateSession(request);
};

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
