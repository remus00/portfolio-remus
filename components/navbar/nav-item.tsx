import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
    link: string;
    active: string;
}

export const NavItem = ({ label, link, active, ...rest }: Props) => {
    return (
        <Link
            href={link}
            className={cn(
                "relative text-[20px] capitalize leading-5 after:absolute after:left-0 after:top-full after:h-px after:w-0 after:bg-primary after:transition-all after:duration-500 after:content-[''] hover:after:w-full md:text-[14px] md:leading-[16px]",
                active === label &&
                    "text-primary after:absolute after:left-0 after:top-full after:h-px after:w-full after:bg-primary after:transition-all after:duration-500 after:content-['']"
            )}
            {...rest}
        >
            {label}
        </Link>
    );
};
