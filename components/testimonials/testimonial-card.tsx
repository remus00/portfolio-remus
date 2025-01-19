import { Testimonial } from '@/types/testimonial';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    data: Testimonial;
}

export const TestimonialCard = ({ data }: Props) => {
    const { fullName, role, avatar, linkedInHref, text } = data;

    return (
        <blockquote className="flex w-full max-w-[900px] flex-col items-center gap-8 rounded-[32px] bg-card px-8 pt-8 transition-all duration-300">
            <p className="text-[18px] leading-[30px] tracking-[-0.25px] text-black dark:text-white">
                <span className="mr-1">&ldquo;</span>
                {text}
                <span className="ml-1">&rdquo;</span>
            </p>
            <div className="flex items-end transition-all duration-300">
                <div className="size-9 bg-background">
                    <div className="size-full rounded-br-[32px] bg-card" />
                </div>
                <div className="flex items-center gap-4 rounded-t-[32px] bg-background p-4 transition-all duration-300">
                    <div className="relative size-[60px] overflow-hidden rounded-[16px]">
                        <Image
                            src={avatar}
                            alt={`${fullName} avatar`}
                            className="object-cover object-center"
                        />
                    </div>
                    <cite className="flex flex-col gap-1">
                        <Link
                            href={linkedInHref}
                            target="_blank"
                            className="inline-flex items-center not-italic text-primary transition-all duration-300 hover:text-primary/80"
                        >
                            <span className="underline underline-offset-2">
                                {fullName}
                            </span>
                            <Icon icon="ri:arrow-right-up-line" className="h-4 w-4" />
                        </Link>
                        <span className="left-4 text-[14px] tracking-[-0.25px] text-muted-foreground">
                            {role}
                        </span>
                    </cite>
                </div>
                <div className="size-9 bg-background">
                    <div className="size-full rounded-bl-[32px] bg-card" />
                </div>
            </div>
        </blockquote>
    );
};
