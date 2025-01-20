import { ContactItem } from './contact-item';

export const ContactsInfo = () => {
    return (
        <div className="flex w-full max-w-full flex-col gap-4 rounded-[16px] bg-card p-4 sm:w-full sm:max-w-[460px] sm:rounded-[32px] sm:p-8 md:w-fit md:max-w-fit">
            <ContactItem
                label="Email"
                content="info@remusburlacu.com"
                icon="ri:file-copy-line"
            />

            <ContactItem
                label="LinkedIn"
                content="Marian Remus Burlacu"
                isLink={true}
                href="https://www.linkedin.com/in/marian-remus-burlacu/"
                icon="ri:arrow-right-up-line"
            />
        </div>
    );
};
