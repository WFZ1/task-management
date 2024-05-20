import { FunctionComponent } from 'react';

interface DataTableCellWithIconProps {
    icon: FunctionComponent<{ className: string }>;
    label: string;
}

export const DataTableCellWithIcon = ({ icon: Icon, label }: DataTableCellWithIconProps) => {
    return (
        <div className="flex items-center">
            {Icon && <Icon className="mr-2 h-4 w-4 text-muted-foreground" />}
            <span>{label}</span>
        </div>
    );
};
