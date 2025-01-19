import * as React from 'react';

import { cn } from '@/lib/utils';
import { FieldError } from 'react-hook-form';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
    error?: FieldError | undefined;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'flex min-h-[160px] w-full rounded-[16px] border border-muted-foreground/20 bg-card p-4 text-[16px] leading-[18px] tracking-[-0.25px] transition-all duration-300 placeholder:text-muted-foreground/50 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-background',
                    className,
                    error && 'border-destructive'
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = 'Textarea';

export { Textarea };
