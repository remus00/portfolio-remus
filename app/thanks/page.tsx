import { Icon } from '@iconify/react/dist/iconify.js';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://remus-burlacu.com/thanks',
    },
};

export default function Thanks() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-background">
            <div className="flex max-w-[395px] flex-col gap-4 text-center">
                <h1 className="text-[40px] leading-[52px] tracking-[-0.25px] text-black dark:text-white sm:text-[52px] sm:leading-[65px]">
                    <span className="text-primary">Thank you</span> for reaching out ♥️
                </h1>
                <p className="text-[20px] leading-5">Your message has been sent</p>
            </div>
            <Link
                href="/"
                className="inline-flex items-center text-muted-foreground transition-all duration-300 hover:text-primary"
            >
                <span className="text-[14px] leading-6 underline">Back to home page</span>
                <Icon icon="ri:arrow-right-up-line" className="h-4 w-4" />
            </Link>
        </div>
    );
}
