import { SectionTitle } from './section-title';

export const Contacts = () => {
    return (
        <section
            id="contacts"
            className="flex w-full flex-col items-center justify-center gap-8 py-32 text-title"
        >
            <SectionTitle sectionNumber={5} label="Get in touch" />
        </section>
    );
};
