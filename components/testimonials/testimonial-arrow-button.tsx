import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '../ui/button';

interface Props {
    handleClick: () => void;
    arrow: 'left' | 'right';
}

export const TestimonialArrowButton = ({ handleClick, arrow }: Props) => {
    return (
        <Button
            onClick={handleClick}
            className="group flex !size-8 items-center justify-center hover:bg-muted-foreground/10"
            variant="ghost"
        >
            <Icon
                icon={`ri:arrow-${arrow}-s-line`}
                className="!h-6 !w-6 text-muted-foreground transition-all duration-300 group-hover:text-black dark:group-hover:text-white"
            />
        </Button>
    );
};
