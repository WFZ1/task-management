import { FormStatus } from 'react-dom';
import { ReactNode, type ComponentProps } from 'react';
import { Button } from './button';
import { Spinner } from './spinner';

type SubmitButtonProps = ComponentProps<'button'> &
    Pick<FormStatus, 'pending' | 'action'> & {
        spin?: ReactNode;
    };

export const SubmitButton = ({ children, spin = <Spinner />, pending, action, ...props }: SubmitButtonProps) => {
    const isPending = pending && action === props.formAction;

    return (
        <Button {...props} type="submit" aria-disabled={pending}>
            {isPending && spin}
            {children}
        </Button>
    );
};
