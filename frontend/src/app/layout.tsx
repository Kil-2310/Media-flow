import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './styles';

import { ContestProvider } from '@/entities/model/ContestProvider';

import Header from '@/shared/ui/Header';
import SettingsPanel from '@/entities/ui/SettingsPanel';
import ThemeProvider from './ThemeProvider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    title: 'Курская область: культура, история, экология и экономика',
    description: 'Патриотический сайт про соловьиный край России',
    icons: {
        icon: [
            { url: '/favicon/favicon.ico', sizes: 'any' },
            { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        apple: [
            {
                url: '/favicon/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    },
    openGraph: {
        title: 'Курская область: культура, история, экология и экономика',
        description: 'Патриотический сайт про соловьиный край России',
        url: 'https://kursk-region.ru',
        siteName: 'Курский Край',
        images: [
            {
                url: '/images/global/entrance_region.jpg',
                width: 1200,
                height: 630,
                alt: 'Курская область - соловьиный край России',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    metadataBase: new URL('https://kursk-region.ru'),
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <ContestProvider>
                    <ThemeProvider>
                        <SettingsPanel />
                        <Header />
                        <main>{children}</main>
                    </ThemeProvider>
                </ContestProvider>
            </body>
        </html>
    );
}
