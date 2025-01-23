'use client';

import { techStack } from '@/constants/tech-stack-data';
import { useEffect, useRef, useState } from 'react';
import { TechBadge } from '../tech-stack/tech-badge';
import { SectionTitle } from './section-title';

export const TechStack = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [animationDuration, setAnimationDuration] = useState(30);

    useEffect(() => {
        if (!containerRef.current) return;

        const calculateDuration = () => {
            const containerWidth = containerRef.current?.offsetWidth || 0;
            const contentWidth = containerRef.current?.scrollWidth || 0;
            const newDuration = (contentWidth / containerWidth) * 15; // Adjust 15 to change base speed
            setAnimationDuration(newDuration);
        };

        calculateDuration();
        window.addEventListener('resize', calculateDuration);

        return () => window.removeEventListener('resize', calculateDuration);
    }, []);

    return (
        <section className="flex w-full flex-col items-center justify-center gap-8 py-16 text-title md:py-32">
            <SectionTitle sectionNumber={2} label="My tech stack" />

            <div
                ref={containerRef}
                className="w-full max-w-[900px] overflow-x-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
                <div
                    className="animate-scroll flex items-center gap-4 pr-4"
                    style={
                        {
                            '--animation-duration': `${animationDuration}s`,
                            width: 'max-content',
                        } as React.CSSProperties
                    }
                >
                    {[...techStack, ...techStack].map(({ label, icon }, idx) => (
                        <TechBadge key={idx} label={label} icon={icon} />
                    ))}
                </div>
            </div>

            <div
                ref={containerRef}
                className="w-full max-w-[900px] overflow-x-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
                <div
                    className="animate-scroll-opposite flex items-center gap-4 pr-4"
                    style={
                        {
                            '--animation-duration': `${animationDuration}s`,
                            width: 'max-content',
                        } as React.CSSProperties
                    }
                >
                    {[...techStack, ...techStack].map(({ label, icon }, idx) => (
                        <TechBadge key={idx} label={label} icon={icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};
