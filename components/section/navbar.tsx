'use client';

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Fragment, useState } from 'react';
import { ThemeToggleButton } from '../custom/theme-toggle-button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { scrollY } = useScroll();
    const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolledPastThreshold(latest > window.innerHeight);

        if (!scrolledPastThreshold) setIsOpen(false);
    });

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className={cn(
                'fixed top-2 z-50 flex w-fit items-center gap-4 rounded-md border bg-card px-4 py-2',
                scrolledPastThreshold && 'rounded-full py-4'
            )}
            initial={{ x: 0 }}
            animate={{ x: scrolledPastThreshold ? window.innerWidth / 2 - 34 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <AnimatePresence>
                {scrolledPastThreshold ? (
                    <Icon icon="ri:menu-fill" onClick={handleOpen} />
                ) : (
                    <Fragment>
                        <p>Home</p>
                        <p>About</p>
                        <p>Project</p>
                        <ThemeToggleButton />
                    </Fragment>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <div className="absolute right-0 top-10">
                        <ThemeToggleButton />
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
