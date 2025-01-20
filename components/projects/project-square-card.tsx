import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
    img: StaticImageData;
    title: string;
    href: string;
    description: string;
}

export const ProjectSquareCard = ({ img, title, href, description }: Props) => {
    return (
        <div className="flex max-w-[350px] flex-col gap-4 rounded-[16px] bg-card p-4 sm:rounded-[32px] md:size-[300px]">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[12px] sm:rounded-[16px]">
                <Image src={img} alt={`${title} image`} className="mb-8 scale-[250%]" />
            </div>
            <div className="w-full gap-1">
                <Link
                    href={href}
                    target="_blank"
                    className="flex items-center text-[16px] leading-6 tracking-[-0.25px] text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
                >
                    <p className="underline underline-offset-2">{title}</p>
                    <Icon icon="ri:arrow-right-up-line" className="h-4 w-4" />
                </Link>
                <p className="text-[14px] leading-6 tracking-[-0.25px] text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    );
};
