import {
    AvatarPlaceholder,
    MarcelloSilvetriAvatar,
    SalvatoreStamponeAvatar,
} from '@/public/testimonials';
import { Testimonial } from '@/types/testimonial';

export const testimonialsData: Testimonial[] = [
    {
        fullName: 'Marcello Silvestri',
        role: 'Entrepreneur, full stack web developer and marketing strategist',
        avatar: MarcelloSilvetriAvatar,
        linkedInHref: 'https://www.linkedin.com/in/silvestrimarcello/',
        text: `I’ve had the pleasure of working with Remus for several months on a critical and challenging project for the Italian Football League (Lega Serie A). Remus is not only exceptionally skilled with the React and Next.js stack but also deeply passionate about frontend design. His contributions significantly elevated multiple aspects of the project. Above all, Remus's standout quality is his remarkable "chillness" and patience, even in the face of high-pressure situations, which in my opinion is a rare trait. I wholeheartedly recommend working with Remus to anyone looking for a talented and reliable professional.`,
    },
    {
        fullName: 'Salvatore Stampone',
        role: 'Fullstack developer',
        avatar: SalvatoreStamponeAvatar,
        linkedInHref: 'https://www.linkedin.com/in/salvatorestampone/',
        text: `Working with Remus for several months on a high-intensity project for the Italian Football League (Serie A, Serie B, and AIA Section) was a pleasure. When I arrived, Remus had already developed a great foundation for the front-end. We worked closely together further improving the application, at the aesthetic level as much as at the functional level.

His mastery of Next.js, TailwindCSS and the latest paradigms and best practices emerged from day one. Not only that: Remus seems naturally talented for UI and UX design.

On a personal level, you will appreciate his unwavering calm. Tight deadlines, changing priorities, and unexpected challenges: Remus faced it all with patience, focus, and determination. And with a healthy dose of humor, from which the whole team benefited!

I genuinely recommend working Remus: he is a talented professional, standing for reliability and consistency.`,
    },
    {
        fullName: 'Alexandre Bros',
        role: 'CTO',
        avatar: AvatarPlaceholder,
        linkedInHref: '',
        text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend id parturient; natoque libero maecenas maximus maecenas. Fermentum consectetur potenti porttitor ligula felis bibendum pretium potenti. Tortor pharetra non nascetur consectetur risus. Risus mollis mauris eu in nec neque tincidunt. Orci nam malesuada magna, quis orci venenatis. Consectetur turpis leo per, quis ultrices turpis. Torquent hendrerit montes semper cubilia enim massa. Cursus purus dictum eleifend posuere etiam consequat dis. Ac nunc felis tristique cras euismod velit felis.',
    },
];
