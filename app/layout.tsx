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
    description:
        "Welcome to Marian Remus Burlacu's portfolio. I am a frontend developer specializing in building performant, responsive, and user-friendly web applications using Next.js, TailwindCSS, and modern frontend tools. Open to work and freelance opportunities.",
    authors: [
        { name: 'Marian Remus Burlacu', url: 'https://remus-burlacu.com' },
        { name: 'Remus Burlacu', url: 'https://remus-burlacu.com' },
    ],
    creator: 'Marian Remus Burlacu',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    keywords: [
        'Marian Remus Burlacu',
        'Remus Burlacu',
        'Frontend Developer Portfolio',
        'Next.js Developer',
        'Freelance Frontend Developer',
        'Open to Work Developer',
        'TailwindCSS Portfolio',
        'React.js Developer',
        'Modern Web Development',
        'Remote Developer',
    ],
    alternates: {
        canonical: 'https://remus-burlacu.com',
    },
    robots: {
        index: true,
        follow: true,
        noarchive: false,
    },
    openGraph: {
        title: "Remus's Portfolio - Frontend Developer & Freelancer",
        description:
            'Welcome to Marian Remus Burlacu portfolio. I am a frontend developer specializing in building performant, responsive, and user-friendly web applications using Next.js, TailwindCSS, and modern frontend tools. Open to work and freelance opportunities.',
        url: 'https://remus-burlacu.com',
        siteName: "Remus's Portfolio",
        images: [
            {
                url: '/preview.png',
                width: 1200,
                height: 630,
                alt: "Remus's Portfolio Preview Image",
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    viewport: 'width=device-width, initial-scale=1.0',
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
