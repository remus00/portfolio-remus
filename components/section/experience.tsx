'use client';
import { experiencesData } from '@/constants/experiences-data';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ExperienceInfo } from '../experience/experience-info';
import { ExperienceTech } from '../experience/experience-tech';
import { ExperienceTitle } from '../experience/experience-title';
import { SectionTitle } from '../section/section-title';

export const Experience = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleClick = (idx: number) => {
        if (idx === selectedIndex) {
            setSelectedIndex(null);
        } else {
            setSelectedIndex(idx);
        }
    };

    return (
        <section
            id="work"
            className="flex w-full flex-col items-center justify-center gap-8 py-32 text-title"
        >
            <SectionTitle sectionNumber={2} label="Work experience" />
            <div className="flex w-full max-w-[900px] flex-col gap-8">
                {experiencesData.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col rounded-[32px] bg-card p-8"
                    >
                        <ExperienceTitle
                            img={item.img ?? ''}
                            name={item.name}
                            rangeDate={item.rangeDate}
                            index={idx}
                            selectedIndex={selectedIndex}
                            onClick={() => handleClick(idx)}
                        />
                        <AnimatePresence mode="wait" initial={false}>
                            {selectedIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: 'auto',
                                        opacity: 1,
                                    }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, easings: 'easeInOut' }}
                                    className="flex flex-col gap-8 overflow-hidden"
                                >
                                    <div className="mt-8 flex items-start justify-between gap-8">
                                        <ExperienceInfo data={item.info} />
                                        <p className="w-full max-w-[418px] text-[14px] leading-6 tracking-[-0.25px] text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex w-full items-start gap-8">
                                        <p className="shrink-0 text-[14px] leading-6 tracking-[-0.25px] text-muted-foreground">
                                            Tech stack:
                                        </p>
                                        <div
                                            className={`flex h-[${item.techStackHeight}] flex-wrap gap-x-2 gap-y-1`}
                                        >
                                            {item.techStack.map(
                                                ({ icon, label }, idx) => {
                                                    return (
                                                        <ExperienceTech
                                                            key={idx}
                                                            icon={icon}
                                                            label={label}
                                                        />
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};
