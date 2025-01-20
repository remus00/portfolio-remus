'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';

interface Props extends HTMLAttributes<HTMLDivElement> {
    isLink?: boolean;
    href?: string;
    label: string;
    content: string;
    icon: string;
}

export const ContactItem = ({ isLink, href, label, content, icon, ...rest }: Props) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard
                .writeText(content)
                .then(() => toast.success(`${label} copied to clipboard`));
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <>
            {isLink && href ? (
                <Link
                    href={href}
                    className="flex w-fit justify-between gap-3"
                    target="_blank"
                >
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] leading-4 tracking-[-0.25px] text-muted-foreground">
                            {label}
                        </p>
                        <p className="line-clamp-1 shrink-0 text-[16px] leading-5 tracking-[-0.25px] text-black dark:text-white">
                            {content}
                        </p>
                    </div>
                    <Button
                        className="group/link flex !size-8 items-center justify-center hover:bg-muted-foreground/10"
                        variant="ghost"
                    >
                        <Icon
                            icon={icon}
                            className="!h-6 !w-6 text-muted-foreground transition-all duration-300 group-hover/link:text-black dark:group-hover/link:text-white"
                        />
                    </Button>
                </Link>
            ) : (
                <div className="flex justify-between gap-3" {...rest}>
                    <div className="flex flex-col gap-1">
                        <p className="text-[14px] leading-4 tracking-[-0.25px] text-muted-foreground">
                            {label}
                        </p>
                        <p className="text-[16px] leading-5 tracking-[-0.25px] text-black dark:text-white">
                            {content}
                        </p>
                    </div>
                    <Button
                        className="group flex !size-8 items-center justify-center hover:bg-muted-foreground/10"
                        variant="ghost"
                        onClick={handleCopy}
                    >
                        <Icon
                            icon={icon}
                            className="!h-6 !w-6 text-muted-foreground transition-all duration-300 group-hover:text-black dark:group-hover:text-white"
                        />
                    </Button>
                </div>
            )}
        </>
    );
};
