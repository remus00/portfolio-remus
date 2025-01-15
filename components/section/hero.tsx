'use client';
import useTextRevealAnimation from '@/hooks/use-text-reveal-animation';
import { motion } from 'motion/react';
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
            id="hero"
            button={
                <Button
                    variant="secondary"
                    className="h-full w-full rounded-[16px] text-[20px] text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-black dark:hover:text-white"
                >
                    <motion.p
                        ref={btnTextScope}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Get in <br />
                        touch
                    </motion.p>
                </Button>
            }
        >
            <div className="flex flex-col">
                <motion.h1
                    ref={h1Scope}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full max-w-[800px] text-center text-[80px] font-medium leading-[75px] tracking-[-0.03px]"
                >
                    Yesterday you said tomorrow
                </motion.h1>
                <motion.p
                    ref={pScope}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-center text-[32px]"
                >
                    Let&apos;s start now{' '}
                    <span className="italic text-primary">together</span>
                </motion.p>
            </div>
        </CutOutContainer>
    );
};
