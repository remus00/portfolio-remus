'use client';
import useTextRevealAnimation from '@/hooks/use-text-reveal-animation';
import { handleLinkClick } from '@/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { CutOutContainer } from '../custom/cut-out-container';
import { Button } from '../ui/button';

export const Hero = () => {
    const { scope: h1Scope, entranceAnimation: h1Animation } = useTextRevealAnimation();
    const { scope: pScope, entranceAnimation: pAnimation } = useTextRevealAnimation();
    const { scope: btnTextScope, entranceAnimation: btnTextAnimation } =
        useTextRevealAnimation();

    useEffect(() => {
        h1Animation().then(() => pAnimation().then(() => btnTextAnimation()));
    }, [h1Animation, pAnimation]);

    return (
        <CutOutContainer
            id="home"
            button={
                <Button
                    variant="ghost"
                    className="h-full w-full rounded-[16px] text-[20px] text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white"
                    asChild
                >
                    <Link href="#contacts" onClick={(e) => handleLinkClick(e)}>
                        <motion.p
                            ref={btnTextScope}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Get in <br />
                            touch
                        </motion.p>
                    </Link>
                </Button>
            }
        >
            <div className="flex flex-col">
                <motion.h1
                    ref={h1Scope}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full max-w-[600px] px-[16px] text-center text-[40px] font-medium leading-[45px] tracking-[-0.03px] sm:text-[64px] sm:leading-[60px] md:px-0 lg:max-w-[800px] lg:text-[80px] lg:leading-[75px]"
                >
                    Yesterday you said tomorrow
                </motion.h1>
                <motion.p
                    ref={pScope}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-center text-[24px] sm:text-[30px] md:text-[32px]"
                >
                    Let&apos;s start now{' '}
                    <span className="italic text-primary">together</span>
                </motion.p>
            </div>
        </CutOutContainer>
    );
};
