import { StaticImageData } from 'next/image';

export type Testimonial = {
    fullName: string;
    role: string;
    avatar: StaticImageData;
    linkedInHref: string;
    text: string;
};
