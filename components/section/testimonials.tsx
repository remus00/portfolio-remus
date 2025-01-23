import { TestimonialsCarousel } from '../testimonials/testimonials-carousel';
import { SectionTitle } from './section-title';

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="flex w-full flex-col items-center justify-center gap-8 py-16 text-title md:py-32"
        >
            <SectionTitle sectionNumber={5} label="What people say about me" />
            <TestimonialsCarousel />
        </section>
    );
};
