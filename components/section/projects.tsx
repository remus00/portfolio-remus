import { SectionTitle } from './section-title';

export const Projects = () => {
    return (
        <section
            id="projects"
            className="flex w-full flex-col items-center justify-center gap-8 py-32 text-title"
        >
            <SectionTitle sectionNumber={3} label="Projects" />
        </section>
    );
};
