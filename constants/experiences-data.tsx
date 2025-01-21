import { FramerMotionIcon } from '@/components/icons/framer-motion-icon';
import { MaterialUiIcon } from '@/components/icons/material-ui';
import { ReduxIcon } from '@/components/icons/redux-icon';
import { WolicoLogo } from '@/public';
import { Experience } from '@/types/experience';

export const experiencesData: Experience[] = [
    {
        name: 'Wolico',
        img: WolicoLogo,
        rangeDate: 'Dec 2023 - present',
        info: {
            position: 'Frontend Developer',
            location: 'Remote - Milan Italy',
            industry: 'Web development',
            website: {
                label: 'www.about.wolico.com',
                href: 'https://about.wolico.com/',
            },
        },
        description: (
            <>
                Leading the front-end developing efforts for the backoffice platform of
                Lega Serie A, Italy's premier football league. I was responsible for
                translating the designs into seamless user experiences while ensuring all
                functionalities were implemented with precision. <br /> Even tho I didn’t
                work on the design, I provided my input and opinions to assist in its
                realization. <br /> Our challenge was to bring together 16 different
                applications into a single web app.
            </>
        ),
        techStack: [
            { icon: 'teenyicons:nextjs-solid', label: 'Next.js' },
            { icon: 'simple-icons:react', label: 'React.js' },
            { icon: 'lineicons:typescript', label: 'Typescript' },
            {
                icon: <ReduxIcon className="h-4 w-4 text-muted-foreground" />,
                label: 'Redux',
            },
            { icon: 'devicon-plain:axios', label: 'Axios' },
            { icon: 'simple-icons:reactquery', label: 'React Query' },
            { icon: 'ri:tailwind-css-fill', label: 'TailwindCSS' },
            {
                icon: <FramerMotionIcon className="h-4 w-4 text-muted-foreground" />,
                label: 'Framer Motion',
            },
            { icon: 'simple-icons:shadcnui', label: 'Shadcn/ui' },
        ],
        techStackHeight: '52px',
    },
    {
        name: 'EvoHunt',
        rangeDate: 'Sep 2023 - Dec 2023',
        info: {
            position: 'Internship - Frontend developer',
            location: 'Turin Italy',
            industry: 'Consulting Agency',
        },
        description:
            'Following the initial skill assessment, I was tasked with developing the entire website UI, reviewing and upgrading existing UI components to align them with the updated design, as well as implementing new solutions for frontend challenges and creating dynamic components.',
        techStack: [
            { icon: 'simple-icons:react', label: 'React.js' },
            { icon: 'flowbite:html-solid', label: 'HTML' },
            { icon: 'flowbite:css-solid', label: 'CSS' },
            { icon: 'lineicons:javascript', label: 'Javascript' },
            { icon: 'lineicons:typescript', label: 'Typescript' },
            { icon: 'mdi:sass', label: 'Sass' },
            { icon: <MaterialUiIcon />, label: 'Material Ui' },
        ],
        techStackHeight: '24px',
    },
];
