import { AboutSection } from '@/components/section/about';
import { Experience } from '@/components/section/experience';
import { Footer } from '@/components/section/footer';
import { Hero } from '@/components/section/hero';
import { Navbar } from '@/components/section/navbar';
import { Projects } from '@/components/section/projects';

export default function Home() {
    return (
        <div className="flex h-fit w-full flex-col items-center justify-center bg-background">
            <Navbar />
            <Hero />
            <AboutSection />
            <Experience />
            <Projects />
            <Footer />
        </div>
    );
}
