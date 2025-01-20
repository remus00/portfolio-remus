import type { ExperienceInfo as PropsType } from '@/types/experience';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export const ExperienceInfo = ({ data }: { data: PropsType }) => {
    const { position, location, industry, website } = data;

    return (
        <div className="flex w-full flex-col gap-1 sm:max-w-[300px] sm:gap-2">
            <div className="flex items-center justify-between">
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-muted-foreground">
                    Position:
                </p>
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-black dark:text-white">
                    {position}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-muted-foreground">
                    Location:
                </p>
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-black dark:text-white">
                    {location}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-muted-foreground">
                    Industry:
                </p>
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-black dark:text-white">
                    {industry}
                </p>
            </div>
            {website && (
                <div className="flex items-center justify-between">
                    <p className="text-[14px] leading-6 tracking-[-0.25px] text-muted-foreground">
                        Website:
                    </p>
                    <Link
                        href={website.href}
                        target="_blank"
                        className="flex items-center text-[14px] leading-6 tracking-[-0.25px] text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                        <p className="underline underline-offset-2">{website.label}</p>
                        <Icon icon="ri:arrow-right-up-line" className="h-4 w-4" />
                    </Link>
                </div>
            )}
        </div>
    );
};
