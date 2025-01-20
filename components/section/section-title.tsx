import { cn, jura } from '@/lib/utils';

interface Props {
    sectionNumber: number;
    label: string;
}

export const SectionTitle = ({ sectionNumber, label }: Props) => {
    return (
        <h2 className="text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px]">
            <span className={cn('font-bold text-primary', jura.className)}>
                0.{sectionNumber}
            </span>{' '}
            - {label}
        </h2>
    );
};
