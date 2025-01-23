import { AboutSection } from '@/components/section/about';
import { Contacts } from '@/components/section/contacts';
import { Experience } from '@/components/section/experience';
import { Footer } from '@/components/section/footer';
import { Hero } from '@/components/section/hero';
import { Navbar } from '@/components/section/navbar';
import { Projects } from '@/components/section/projects';
import { TechStack } from '@/components/section/tech-stack';
import { Testimonials } from '@/components/section/testimonials';

export default function Home() {
    return (
        <div className="flex h-fit w-full flex-col items-center justify-center bg-background">
            <Navbar />
            <Hero />
            <AboutSection />
            <TechStack />
            <Experience />
            <Projects />
            <Testimonials />
            <Contacts />
            <Footer />
        </div>
    );
}
