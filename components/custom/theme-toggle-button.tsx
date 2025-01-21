'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';

export function ThemeToggleButton({
    className,
    itemClassName,
}: {
    className?: string;
    itemClassName?: string;
}) {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        'flex !size-12 items-center justify-center rounded-[16px] bg-card p-0 shadow-sm',
                        className
                    )}
                >
                    <Icon
                        icon="hugeicons:sun-02"
                        className="!size-5 text-primary transition-all dark:opacity-0"
                    />

                    <Icon
                        icon="hugeicons:moon"
                        className="absolute !size-5 text-primary opacity-0 transition-all dark:opacity-100"
                    />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => setTheme('light')}
                    className={cn(itemClassName)}
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                    className={cn(itemClassName)}
                >
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme('system')}
                    className={cn(itemClassName)}
                >
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
