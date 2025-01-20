import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Button } from '../ui/button';

interface Props {
    handleOpen: () => void;
    className?: string;
}

export const CollapsedNavMenuButton = ({ handleOpen, className }: Props) => {
    return (
        <Button
            onClick={handleOpen}
            variant="ghost"
            size="icon"
            className={cn(
                'flex !size-12 items-center justify-center rounded-[16px] bg-card p-0 shadow-sm hover:bg-card hover:text-black dark:text-muted-foreground dark:hover:bg-card dark:hover:text-white',
                className
            )}
        >
            <Icon
                icon="heroicons-solid:menu-alt-1"
                className="!size-5 text-inherit transition-all duration-300"
            />
        </Button>
    );
};
