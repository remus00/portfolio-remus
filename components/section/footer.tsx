import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Footer = () => {
    return (
        <div className="flex w-full max-w-[900px] items-center justify-center py-8">
            <div className="flex w-full items-center justify-between">
                <p className="text-[14px] leading-5 text-muted-foreground">
                    Copyright &copy; Marian Remus Burlacu &bull; All rights reserved
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
