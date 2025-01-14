import { ThemeToggleButton } from '@/components/custom/theme-toggle-button';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="flex h-screen w-full items-center justify-center gap-2">
            <Button> Hello world</Button>
            <ThemeToggleButton />
        </div>
    );
}
