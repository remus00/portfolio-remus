import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    button: ReactNode;
}

export const CutOutContainer = ({ children, button, ...rest }: Props) => {
    return (
        <div className="relative flex h-screen w-full bg-background" {...rest}>
            <div className="absolute left-1/2 top-1/2 h-[calc(100vh-32px)] w-[calc(100vw-32px)] -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-card md:h-[calc(100vh-64px)] md:w-[calc(100vw-64px)]">
                <div className="flex h-full w-full items-center justify-center">
                    {children}
                </div>
            </div>
            <div className="absolute bottom-4 right-4 flex size-[120px] items-center justify-center rounded-tl-[32px] bg-background p-8 md:bottom-[32px] md:right-[32px] md:size-[168px]">
                {button}
            </div>
            <div className="absolute bottom-4 right-[136px] size-[50px] bg-background md:bottom-[32px] md:right-[200px]">
                <div className="h-full w-full rounded-br-[32px] bg-card" />
            </div>

            <div className="absolute bottom-[136px] right-4 size-[50px] bg-background md:bottom-[200px] md:right-[32px]">
                <div className="h-full w-full rounded-br-[32px] bg-card" />
            </div>
        </div>
    );
};
