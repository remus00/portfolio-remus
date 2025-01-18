'use client';

import { navItems } from '@/constants/nav-items';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MouseEvent, useState } from 'react';
import { NavItem } from '../custom/nav-item';
import { ThemeToggleButton } from '../custom/theme-toggle-button';
import { Button } from '../ui/button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { scrollY } = useScroll();
    const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
    const [active, setActive] = useState<string>('home');

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolledPastThreshold(latest > window.innerHeight - 100);

        if (!scrolledPastThreshold) setIsOpen(false);
    });

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const url = new URL(e.currentTarget.href);
        const hash = url.hash;

        const target = document.querySelector(hash);

        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 2.75 }}
            className="fixed top-2 z-50"
        >
            <motion.div
                className={cn('flex w-fit items-center')}
                initial={{ x: 0 }}
                animate={{ x: scrolledPastThreshold ? window.innerWidth / 2 - 34 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <AnimatePresence>
                    {scrolledPastThreshold ? (
                        <Button
                            onClick={handleOpen}
                            variant="ghost"
                            size="icon"
                            className="flex !size-12 items-center justify-center rounded-[16px] bg-card p-0 shadow-sm hover:bg-card hover:text-black dark:text-muted-foreground dark:hover:bg-card dark:hover:text-white"
                        >
                            <Icon
                                icon="heroicons-solid:menu-alt-1"
                                className="!size-5 text-inherit transition-all duration-300"
                            />
                        </Button>
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
                                            handleClickMobileNavItem(e);
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
                        <div className="absolute right-0 top-[64px] flex flex-col items-end gap-4 rounded-[32px] bg-card p-4">
                            {navItems.map(({ label, link }, idx) => (
                                <NavItem
                                    key={idx}
                                    label={label}
                                    link={link}
                                    active={active}
                                    onClick={(e) => {
                                        setActive(label);
                                        handleClickMobileNavItem(e);
                                        setIsOpen(false);
                                    }}
                                />
                            ))}
                            <ThemeToggleButton className="!w-full shadow-none" />
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};
