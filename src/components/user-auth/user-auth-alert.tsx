interface UserAuthAlertProps {
    message?: string;
}

export const UserAuthAlert = ({ message }: UserAuthAlertProps) => {
    return message && <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">{message}</p>;
};
