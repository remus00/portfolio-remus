import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    button: ReactNode;
}

export const CutOutContainer = ({ children, button, ...rest }: Props) => {
    return (
        <div className="relative flex h-screen w-full bg-background" {...rest}>
            <div className="absolute left-1/2 top-1/2 h-[calc(100vh-64px)] w-[calc(100vw-64px)] -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-card">
                <div className="flex h-full w-full items-center justify-center">
                    {children}
                </div>
            </div>
            <div className="absolute bottom-[32px] right-[32px] flex size-[168px] items-center justify-center rounded-tl-[32px] bg-background p-8">
                {button}
            </div>
            <div className="absolute bottom-[32px] right-[200px] size-[50px] bg-background">
                <div className="h-full w-full rounded-br-[32px] bg-card"></div>
            </div>

            <div className="absolute bottom-[200px] right-[32px] size-[50px] bg-background">
                <div className="h-full w-full rounded-br-[32px] bg-card"></div>
            </div>
        </div>
    );
};
