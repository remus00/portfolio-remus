import { ReactNode } from 'react';

export type ExperienceInfo = {
    position: string;
    location: string;
    industry: string;
    website?: { label: string; href: string };
};

export type ExperienceTech = {
    label: string;
    icon: ReactNode | string;
};

export type Experience = {
    name: string;
    img?: StaticImageData;
    rangeDate: string;
    info: ExperienceInfo;
    description: ReactNode;
    techStack: ExperienceTech[];
    techStackHeight: string;
};
