'use client';

import { testimonialsData } from '@/constants/testimonials';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { TestimonialArrowButton } from './testimonial-arrow-button';
import { TestimonialCard } from './testimonial-card';

export const TestimonialsCarousel = () => {
    const [testimonialsIndex, setTestimonialsIndex] = useState<number>(0);

    const handlePrevClick = () => {
        setTestimonialsIndex((current) => {
            if (current === 0) return testimonialsData.length - 1;
            return current - 1;
        });
    };

    const handleNextClick = () => {
        setTestimonialsIndex((current) => {
            if (current === testimonialsData.length - 1) return 0;
            return current + 1;
        });
    };

    return (
        <div className="flex flex-col items-center gap-8">
            {testimonialsData.map(
                (testimonial, idx) =>
                    testimonialsIndex === idx && (
                        <TestimonialCard key={idx} data={testimonial} />
                    )
            )}

            <div className="flex items-center gap-8">
                <TestimonialArrowButton handleClick={handlePrevClick} arrow="left" />
                <div className="flex items-center gap-1">
                    {testimonialsData.map(({ avatar, fullName }, idx) => (
                        <div
                            key={idx}
                            className="relative flex h-[43.2px] items-center"
                            onClick={() => setTestimonialsIndex(idx)}
                        >
                            <div
                                className={cn(
                                    'relative size-9 cursor-pointer overflow-hidden rounded-[8px] transition-all duration-300',
                                    testimonialsIndex === idx && 'size-[43.2px]'
                                )}
                            >
                                <Image src={avatar} alt={`${fullName} avatar`} />
                            </div>
                        </div>
                    ))}
                </div>
                <TestimonialArrowButton handleClick={handleNextClick} arrow="right" />
            </div>
        </div>
    );
};
