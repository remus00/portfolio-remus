import { RemusImg } from '@/public';
import Image from 'next/image';
import { SectionTitle } from './section-title';

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="flex w-full flex-col items-center justify-center gap-8 py-16 text-title md:py-32"
        >
            <SectionTitle sectionNumber={1} label="Who am I?" />

            <div className="flex flex-col items-center justify-center gap-8 px-4 sm:flex-row sm:items-start sm:gap-4 md:gap-8">
                <div className="relative size-48 shrink-0 overflow-hidden rounded-[32px] border-[2px] border-card md:size-64">
                    <Image
                        src={RemusImg}
                        alt="Remus's photo"
                        className="select-none bg-center bg-no-repeat object-fill"
                    />
                </div>

                <div className="flex w-full max-w-[446px] flex-col items-center justify-between gap-4">
                    <p className="mr-auto w-full max-w-[400px] text-[18px] leading-[24px] tracking-[-0.25px] text-black dark:text-white">
                        Hi there my name is Marian Remus Burlacu but you can call me{' '}
                        <span className="text-primary">Remus</span>.
                    </p>
                    <p className="text-[18px] leading-[24px] tracking-[-0.25px] text-black dark:text-white">
                        I&apos;m a{' '}
                        <span className="text-primary">Frontend developer</span> based in
                        Turin, I specialize in{' '}
                        <span className="text-primary">bringing designs to life</span> &
                        transforming them into{' '}
                        <span className="text-primary">engaging user experiences</span>.
                    </p>
                    <p className="text-[18px] leading-[24px] tracking-[-0.25px] text-black dark:text-white">
                        Outside work I&apos;m kinda nerdy and I love working out,
                        certified gym enjoyer.
                    </p>
                </div>
            </div>
        </section>
    );
};
