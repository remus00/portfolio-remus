import { cn, jura } from '@/lib/utils';
import { RemusImg } from '@/public';
import Image from 'next/image';

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="text-title flex w-full flex-col items-center justify-center gap-8 py-32"
        >
            <h2 className="text-[32px] leading-[40px]">
                <span className={cn('font-bold text-primary', jura.className)}>0.1</span>{' '}
                - Who am I?
            </h2>

            <div className="flex items-start justify-center gap-8">
                <div className="relative size-64 shrink-0 overflow-hidden rounded-[32px] border-[2px] border-card">
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
                        certifield gym enjoyer.
                    </p>
                </div>
            </div>
        </section>
    );
};
