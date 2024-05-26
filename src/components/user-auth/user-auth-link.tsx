import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface UserAuthLinkProps extends PropsWithChildren {
    href: string;
    className?: string;
}

export const UserAuthLink = ({ href, className, children }: UserAuthLinkProps) => {
    return (
        <Link href={href} className={cn(buttonVariants({ variant: 'ghost' }), className)}>
            {children}
        </Link>
    );
};
