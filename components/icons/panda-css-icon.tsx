import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    className?: string;
}

export const PandaCssIcon = ({ className, ...props }: Props) => {
    const { width, height } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ?? 20}
            height={height ?? 20}
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M4.524 20.862c-.258-.317-.958-2.683-1.319-4.451c-1.238-6.075.1-10.397 3.824-12.354c1.596-.838 2.918-1.114 5.37-1.118c3.212-.007 5.102.617 6.808 2.244c2.52 2.403 2.735 6.732.459 9.222c-1.267 1.387-4.598 2.82-6.551 2.82h-.593l-.408-1.239c-.224-.68-.456-1.502-.516-1.825l-.108-.586l.656.088c.777.104 1.89-.27 2.365-.798c.998-1.102.824-3.595-.302-4.333c-1.063-.697-3.124-.653-4.166.089c-1.888 1.345-1.382 6.248 1.172 11.343c.248.495.406.944.351.999c-.054.055-1.624.1-3.49.1c-2.519 0-3.431-.052-3.552-.2z"
            ></path>
        </svg>
    );
};
