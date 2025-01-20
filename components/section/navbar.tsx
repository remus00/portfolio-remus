'use client';

import { navItems } from '@/constants/nav-items';
import { cn, handleLinkClick } from '@/lib/utils';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { ThemeToggleButton } from '../custom/theme-toggle-button';
import { CollapsedNavContent } from '../navbar/collapsed-nav-content';
import { CollapsedNavMenuButton } from '../navbar/collapsed-nav-menu-button';
import { NavItem } from '../navbar/nav-item';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { scrollY } = useScroll();
    const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
    const [active, setActive] = useState<string>('');

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolledPastThreshold(latest > window.innerHeight - 100);

        if (!scrolledPastThreshold) setIsOpen(false);
    });

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            initial={{ y: -70 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 2.75 }}
            className="fixed top-2 z-50 w-full md:w-fit"
        >
            <motion.div
                className={cn('hidden w-fit items-center md:flex')}
                initial={{ x: 0 }}
                animate={{ x: scrolledPastThreshold ? window.innerWidth / 2 - 34 : 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <AnimatePresence>
                    {scrolledPastThreshold ? (
                        <CollapsedNavMenuButton handleOpen={handleOpen} />
                    ) : (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-4 rounded-[16px] bg-card px-5 py-4 shadow-sm">
                                {navItems.map(({ label, link }, idx) => (
                                    <NavItem
                                        key={idx}
                                        label={label}
                                        link={link}
                                        active={active}
                                        onClick={(e) => {
                                            setActive(label);
                                            handleLinkClick(e);
                                        }}
                                    />
                                ))}
                            </div>
                            <ThemeToggleButton />
                        </div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {isOpen && (
                        <CollapsedNavContent
                            active={active}
                            setActive={setActive}
                            setIsOpen={setIsOpen}
                        />
                    )}
                </AnimatePresence>
            </motion.div>

            <div className="relative md:hidden">
                <CollapsedNavMenuButton
                    handleOpen={handleOpen}
                    className="ml-auto mr-4 mt-2"
                />

                <AnimatePresence>
                    {isOpen && (
                        <CollapsedNavContent
                            active={active}
                            setActive={setActive}
                            setIsOpen={setIsOpen}
                            className="right-4 gap-8 p-8 shadow-md"
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
