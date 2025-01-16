import { Icon } from '@iconify/react/dist/iconify.js';
import { isValidElement, ReactNode } from 'react';
import { ExperienceSeparator } from './experience-separator';

interface Props {
    label: string;
    icon: ReactNode | string;
}

export const ExperienceTech = ({ label, icon }: Props) => {
    const renderIcon = () => {
        if (typeof icon === 'string') {
            return <Icon icon={icon} className="h-4 w-4 text-muted-foreground" />;
        } else if (isValidElement(icon)) {
            return icon;
        }
        return null;
    };

    return (
        <>
            <div className="inline-flex items-center gap-1">
                {renderIcon()}
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-black dark:text-white">
                    {label}
                </p>
            </div>
            <ExperienceSeparator />
        </>
    );
};
