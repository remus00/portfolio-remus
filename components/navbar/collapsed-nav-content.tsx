import { navItems } from '@/constants/nav-items';
import { cn, handleLinkClick } from '@/lib/utils';
import { Dispatch, SetStateAction } from 'react';
import { ThemeToggleButton } from '../custom/theme-toggle-button';
import { NavItem } from './nav-item';

interface Props {
    active: string;
    setActive: Dispatch<SetStateAction<string>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

export const CollapsedNavContent = ({
    active,
    setActive,
    setIsOpen,
    className,
}: Props) => {
    return (
        <div
            className={cn(
                'absolute right-0 top-[64px] flex flex-col items-end gap-4 rounded-[32px] bg-card p-4',
                className
            )}
        >
            {navItems.map(({ label, link }, idx) => (
                <NavItem
                    key={idx}
                    label={label}
                    link={link}
                    active={active}
                    onClick={(e) => {
                        setActive(label);
                        handleLinkClick(e);
                        setIsOpen(false);
                    }}
                />
            ))}
            <ThemeToggleButton
                className="!w-full shadow-none"
                itemClassName="text-[16px] sm:text-sm"
            />
        </div>
    );
};
