import { experiencesData } from '@/constants/experiences-data';
import { SectionTitle } from '../section/section-title';
import { ExperienceCard } from './experience-card';

export const Test = () => {
    return (
        <section
            id="experience"
            className="flex w-full flex-col items-center justify-center gap-8 py-32 text-title"
        >
            <SectionTitle index={2} label="Work experience" />
            <div className="flex w-full max-w-[900px] flex-col gap-8">
                {experiencesData.map((item, idx) => (
                    <ExperienceCard data={item} key={idx} />
                ))}
            </div>
        </section>
    );
};
