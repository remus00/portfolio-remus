import { TanstackQueryProvider } from '@/components/providers/tanstack-query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: {
        template: "%s | Remus's Porfolio",
        default: "Remus's Porfolio",
    },
    description: "Personal Remus's portfolio",
    authors: [{ name: 'Marian Remus Burlacu' }],
    creator: 'Marian Remus Burlacu',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    keywords: [
        'Marian Remus Burlacu',
        'Frontend',
        'Frontend developer',
        'Open to work',
        'Freelance',
        'Next.js',
        'TailwindCSS',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn('antialiased', poppins.className, poppins.variable)}>
                <TanstackQueryProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster richColors />
                    </ThemeProvider>
                </TanstackQueryProvider>
            </body>
        </html>
    );
}
