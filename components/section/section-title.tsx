import { cn, jura } from '@/lib/utils';

interface Props {
    sectionNumber: number;
    label: string;
}

export const SectionTitle = ({ sectionNumber, label }: Props) => {
    return (
        <h2 className="text-[32px] leading-[40px]">
            <span className={cn('font-bold text-primary', jura.className)}>
                0.{sectionNumber}
            </span>{' '}
            - {label}
        </h2>
    );
};
