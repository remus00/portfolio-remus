import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Test = () => {
    return (
        <div className="flex h-fit w-full items-center justify-center bg-card px-4">
            <div className="flex w-full max-w-[900px] flex-col items-center justify-between py-8 sm:flex-row">
                <p className="flex text-center text-[14px] leading-5 text-muted-foreground sm:text-start">
                    Copyright &copy; Marian Remus Burlacu{' '}
                    <span className="hidden px-1 sm:block">&bull;</span>{' '}
                    <br className="block sm:hidden" />
                    All rights reserved
                </p>

                <div className="flex justify-center gap-2">
                    <Button
                        asChild
                        className="group h-8 w-8 bg-transparent p-0 transition-all duration-300 hover:scale-110 hover:bg-primary"
                    >
                        <Link
                            href="https://www.linkedin.com/in/marian-remus-burlacu/"
                            target="_blank"
                        >
                            <Icon
                                icon="ri:linkedin-box-line"
                                className="!h-6 !w-6 text-muted-foreground transition-all duration-500 group-hover:text-white"
                            />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        className="group h-8 w-8 bg-transparent p-0 transition-all duration-300 hover:scale-110 hover:bg-primary"
                    >
                        <Link href="https://github.com/remus00" target="_blank">
                            <Icon
                                icon="ri:github-line"
                                className="!h-6 !w-6 text-muted-foreground transition-all duration-500 group-hover:text-white"
                            />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        className="group h-8 w-8 bg-transparent p-0 transition-all duration-300 hover:scale-110 hover:bg-primary"
                    >
                        <Link
                            href="https://www.instagram.com/remus_burlacu/"
                            target="_blank"
                        >
                            <Icon
                                icon="ri:instagram-line"
                                className="!h-6 !w-6 text-muted-foreground transition-all duration-500 group-hover:text-white"
                            />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
