import { PropsWithChildren } from 'react';

interface UserAuthFormProps extends PropsWithChildren {}

export function UserAuthForm({ children }: UserAuthFormProps) {
    return <form>{children}</form>;
}
