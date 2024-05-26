interface UserAuthHeaderProps {
    title: string;
    description: string;
}

export const UserAuthHeader = ({ title, description }: UserAuthHeaderProps) => {
    return (
        <>
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
        </>
    );
};
