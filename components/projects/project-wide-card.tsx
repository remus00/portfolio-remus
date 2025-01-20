import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
    title: string;
    description: ReactNode;
    liveHref: string;
    gitHref: string;
    img: StaticImageData;
}

export const ProjectWideCard = ({
    title,
    description,
    liveHref,
    gitHref,
    img,
}: Props) => {
    return (
        <div className="flex h-fit w-full max-w-[350px] flex-col gap-4 rounded-[32px] bg-card p-4 md:h-[300px] md:w-full md:max-w-[calc(100%-332px)] md:gap-0">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-0">
                <div className="relative h-[152px] w-full overflow-hidden rounded-[16px] md:w-[280px]">
                    <Image
                        src={img}
                        alt={`${title} image`}
                        fill
                        className="scale-125 object-cover object-center"
                    />
                </div>
                <div className="flow-row flex gap-3 md:flex-col">
                    <Link
                        href={liveHref}
                        target="_blank"
                        className="flex items-center text-[16px] leading-6 tracking-[-0.25px] text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                        <p className="underline underline-offset-2">Live demo</p>
                        <Icon icon="ri:arrow-right-up-line" className="h-4 w-4" />
                    </Link>
                    <Link
                        href={gitHref}
                        target="_blank"
                        className="flex items-center text-[16px] leading-6 tracking-[-0.25px] text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                        <p className="underline underline-offset-2">Github repo</p>
                        <Icon icon="ri:arrow-right-up-line" className="h-4 w-4" />
                    </Link>
                </div>
            </div>
            <div>
                <h4 className="text-[16px] leading-6 tracking-[-0.25px] text-black dark:text-white">
                    {title}
                </h4>
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
};
