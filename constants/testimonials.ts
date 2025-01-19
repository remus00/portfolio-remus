import { AvatarPlaceholder, MarcelloSilvetriAvatar } from '@/public/testimonials';
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
        fullName: 'John Doe',
        role: 'CTO',
        avatar: AvatarPlaceholder,
        linkedInHref: '',
        text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend id parturient; natoque libero maecenas maximus maecenas. Fermentum consectetur potenti porttitor ligula felis bibendum pretium potenti. Tortor pharetra non nascetur consectetur risus. Risus mollis mauris eu in nec neque tincidunt. Orci nam malesuada magna, quis orci venenatis. Consectetur turpis leo per, quis ultrices turpis. Torquent hendrerit montes semper cubilia enim massa. Cursus purus dictum eleifend posuere etiam consequat dis. Ac nunc felis tristique cras euismod velit felis.',
    },
    {
        fullName: 'Alexandre Bros',
        role: 'CTO',
        avatar: AvatarPlaceholder,
        linkedInHref: '',
        text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend id parturient; natoque libero maecenas maximus maecenas. Fermentum consectetur potenti porttitor ligula felis bibendum pretium potenti. Tortor pharetra non nascetur consectetur risus. Risus mollis mauris eu in nec neque tincidunt. Orci nam malesuada magna, quis orci venenatis. Consectetur turpis leo per, quis ultrices turpis. Torquent hendrerit montes semper cubilia enim massa. Cursus purus dictum eleifend posuere etiam consequat dis. Ac nunc felis tristique cras euismod velit felis.',
    },
];
