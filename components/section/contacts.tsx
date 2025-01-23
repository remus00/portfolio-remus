import { ContactForm } from '../contacts/contact-form';
import { ContactsInfo } from '../contacts/contacts-info';
import { SectionTitle } from './section-title';

export const Contacts = () => {
    return (
        <section
            id="contacts"
            className="flex w-full flex-col items-center justify-center gap-8 py-16 text-title md:py-32"
        >
            <SectionTitle sectionNumber={6} label="Get in touch" />
            <div className="flex w-full max-w-[900px] flex-col items-center gap-8 px-4 md:flex-row md:items-start">
                <ContactsInfo />
                <ContactForm />
            </div>
        </section>
    );
};
