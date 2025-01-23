import { FramerMotionIcon } from '@/components/icons/framer-motion-icon';
import { ExperienceTech } from '@/types/experience';

export const techStack: ExperienceTech[] = [
    { icon: 'teenyicons:nextjs-solid', label: 'Next.js' },
    { icon: 'simple-icons:react', label: 'React.js' },
    { icon: 'lineicons:typescript', label: 'Typescript' },
    { icon: 'simple-icons:reactquery', label: 'React Query' },
    { icon: 'ri:tailwind-css-fill', label: 'TailwindCSS' },
    { icon: 'simple-icons:shadcnui', label: 'Shadcn/ui' },
    {
        icon: <FramerMotionIcon className="h-4 w-4 text-muted-foreground" />,
        label: 'Framer Motion',
    },
];
