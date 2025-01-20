import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    img?: StaticImageData;
    name: string;
    rangeDate: string;
    index: number;
    selectedIndex: number | null;
}

export const ExperienceTitle = ({
    img,
    name,
    rangeDate,
    index,
    selectedIndex,
    ...rest
}: Props) => {
    return (
        <div className="flex cursor-pointer items-center justify-between" {...rest}>
            <div className="flex items-center gap-2">
                {img ? (
                    <div className="relative size-8 overflow-hidden rounded-[8px]">
                        <Image
                            src={img}
                            alt="wolico logo"
                            className="bg-no-repeat object-cover"
                        />
                    </div>
                ) : (
                    <div className="relative flex size-8 items-center justify-center overflow-hidden rounded-[8px] bg-[#F5F5F4]">
                        <Icon
                            icon="octicon:organization-16"
                            className="h-5 w-5 text-muted-foreground"
                        />
                    </div>
                )}
                <h3
                    className={cn(
                        'text-[20px] leading-[24px] tracking-[-0.25px] text-black transition-all duration-300 dark:text-white',
                        selectedIndex === index && 'text-primary'
                    )}
                >
                    {name}
                </h3>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-[14px] leading-5 tracking-[-0.25px] text-muted-foreground sm:text-[18px] sm:leading-[24px]">
                    {rangeDate}
                </p>
                <Icon
                    icon="lsicon:down-filled"
                    className={cn(
                        'h-5 w-5 text-muted-foreground transition-all duration-300 sm:h-6 sm:w-6',
                        selectedIndex === index && 'rotate-180 transform'
                    )}
                />
            </div>
        </div>
    );
};
