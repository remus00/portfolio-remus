import { WiseWalletProject, WolicoProject } from '@/public/projects';
import { ProjectSquareCard } from '../projects/project-square-card';
import { ProjectWideCard } from '../projects/project-wide-card';
import { SectionTitle } from './section-title';

export const Projects = () => {
    return (
        <section
            id="projects"
            className="flex w-full flex-col items-center justify-center gap-8 py-16 text-title md:py-32"
        >
            <SectionTitle sectionNumber={4} label="Some of my work" />

            <div className="flex w-full max-w-[900px] flex-col flex-wrap items-center gap-4 px-4 md:flex-row md:gap-8">
                <ProjectWideCard
                    title="WiseWallet"
                    img={WiseWalletProject}
                    liveHref="https://budget-tracker-tan-three.vercel.app/"
                    gitHref="https://github.com/remus00/budget-tracker.git"
                    description={
                        <>
                            This is a simple project made to learn TanstackQuery via
                            Next.js, Tailwind.css, Prisma orm, Neon db and Shadcn/ui.
                            <br /> I also start using it in my private life to keep track
                            of my income and expenses.
                        </>
                    }
                />
                <ProjectSquareCard
                    title="Wolico's Website"
                    href="https://about.wolico.com/"
                    img={WolicoProject}
                    description="This is a work related project where as a part of the Wolico team I was tasked with developing the frontend app"
                />
            </div>
        </section>
    );
};
