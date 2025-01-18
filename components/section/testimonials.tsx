import { SectionTitle } from './section-title';

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="flex w-full flex-col items-center justify-center gap-8 py-32 text-title"
        >
            <SectionTitle sectionNumber={4} label="Testimonials" />
        </section>
    );
};