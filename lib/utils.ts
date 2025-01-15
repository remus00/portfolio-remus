import { clsx, type ClassValue } from 'clsx';
import { Jura } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const jura = Jura({
    subsets: ['latin'],
    variable: '--font-jura',
    weight: ['300', '400', '500', '600', '700'],
});
