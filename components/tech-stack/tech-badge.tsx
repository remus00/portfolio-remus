import { Icon } from '@iconify/react/dist/iconify.js';
import { isValidElement, ReactNode } from 'react';

interface Props {
    label: string;
    icon: ReactNode | string;
}

export const TechBadge = ({ label, icon }: Props) => {
    const renderIcon = () => {
        if (typeof icon === 'string') {
            return <Icon icon={icon} className="h-4 w-4 text-muted-foreground" />;
        } else if (isValidElement(icon)) {
            return icon;
        }
        return null;
    };

    return (
        <div className="inline-flex shrink-0 select-none items-center gap-1 rounded-[16px] bg-card px-4 py-2 shadow-sm">
            {renderIcon()}
            <p className="shrink-0 text-[14px] leading-6 tracking-[-0.25px] text-black dark:text-white">
                {label}
            </p>
        </div>
    );
};
