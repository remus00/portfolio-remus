import { clsx, type ClassValue } from 'clsx';
import { Jura } from 'next/font/google';
import { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const jura = Jura({
    subsets: ['latin'],
    variable: '--font-jura',
    weight: ['300', '400', '500', '600', '700'],
});

export const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth' });
};
