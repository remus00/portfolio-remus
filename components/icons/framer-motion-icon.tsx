import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    className?: string;
}

export const FramerMotionIcon = ({ className, ...props }: Props) => {
    const { width, height } = props;
    return (
        <svg
            width={width ?? 20}
            height={height ?? 20}
            viewBox="3.7 3.7 43.6 43.6"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
                fill="#A09F9E"
            />
            <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#CBCBCB" />
            <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#78716C" />
        </svg>
    );
};
