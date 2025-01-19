import { ContactItem } from './contact-item';

export const ContactsInfo = () => {
    return (
        <div className="flex flex-col gap-4 rounded-[32px] bg-card p-8">
            <ContactItem
                label="Email"
                content="remus.burlacu00@gmail.com"
                icon="ri:file-copy-line"
            />
            <ContactItem
                label="Phone number"
                content="+39 3663364248"
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
