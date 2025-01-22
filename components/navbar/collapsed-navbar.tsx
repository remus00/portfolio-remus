import { navItems } from '@/constants/nav-items';
import { cn, handleLinkClick } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { ThemeToggleButton } from '../custom/theme-toggle-button';
import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { NavItem } from './nav-item';

interface Props {
    active: string;
    isOpen: boolean;
    setActive: Dispatch<SetStateAction<string>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

export const CollapsedNavbar = ({
    active,
    setActive,
    isOpen,
    setIsOpen,
    className,
}: Props) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            console.log('Clicked element:', e.target);
            console.log(
                'Wrapper contains target:',
                wrapperRef.current?.contains(e.target as Node)
            );

            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [setIsOpen]);

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        'flex !size-12 items-center justify-center rounded-[16px] bg-card p-0 shadow-sm hover:bg-card hover:text-black dark:text-muted-foreground dark:hover:bg-card dark:hover:text-white',
                        className
                    )}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <Icon
                        icon="heroicons-solid:menu-alt-1"
                        className="!size-5 text-inherit transition-all duration-300"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side="bottom"
                className="mr-2 flex flex-col items-end gap-6 rounded-[16px] border-none p-4 shadow-md sm:gap-4"
            >
                {navItems.map(({ label, link }, idx) => (
                    <DropdownMenuItem key={idx} className="p-0 focus:bg-transparent">
                        <NavItem
                            label={label}
                            link={link}
                            active={active}
                            onClick={(e) => {
                                setActive(label);
                                handleLinkClick(e);
                                setIsOpen(false);
                            }}
                        />
                    </DropdownMenuItem>
                ))}
                <ThemeToggleButton
                    className="!w-full shadow-none"
                    itemClassName="text-[16px] rounded-[12px] sm:text-sm"
                />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
