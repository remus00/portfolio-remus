import { cn } from '@/lib/utils';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    className?: string;
}

export const MaterialUiIcon = ({ className, ...props }: Props) => {
    const { width, height } = props;
    return (
        <svg
            width={width ?? 16}
            height={height ?? 13}
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(className)}
        >
            <g clipPath="url(#clip0_60_428)">
                <path
                    d="M0 7.09064V0.0012207L6 3.54593V5.90907L2 3.54593V8.27221L0 7.09064Z"
                    fill="#A09F9E"
                />
                <path
                    d="M6 3.54593L12 0.0012207V7.09064L8 9.45378L6 8.27221L10 5.90907V3.54593L6 5.90907V3.54593Z"
                    fill="#78716C"
                />
                <path
                    d="M6 8.27246V10.6356L10 12.9987V10.6356L6 8.27246Z"
                    fill="#A09F9E"
                />
                <path
                    d="M10 12.9985L16 9.45378V4.7275L14 5.90907V8.27221L10 10.6354V12.9985ZM14 3.54593V1.18279L16 0.0012207V2.36436L14 3.54593Z"
                    fill="#78716C"
                />
            </g>
            <defs>
                <clipPath id="clip0_60_428">
                    <rect width="16" height="13" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
