import type { Metadata } from 'next';

import EnterVideo from '@/shared/ui/EnterVideo';
import DescriptionRegion from '@/features/description_region';

export const metadata: Metadata = {
    title: 'Курск и Курская область на карте России: экология, экономика, история, культура, туризм',
    description:
        'Курская область на карте России: подробная информация об экологии, экономике, истории, культуре и туризме региона. Достопримечательности, промышленность и природные особенности Курска.',
    keywords: [
        'Курск',
        'Курская область',
        'карта России',
        'экология Курска',
        'экономика Курской области',
        'история Курска',
        'культура Курска',
        'туризм в Курской области',
        'достопримечательности Курска',
        'природа Курской области',
    ],
    authors: [
        {
            name: 'Хомяков Евгений Алексеевич',
            url: 'https://kursk-region.ru',
        },
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    metadataBase: new URL('https://kursk-region.ru'),
    alternates: {
        canonical: 'https://kursk-region.ru',
    },
    openGraph: {
        title: 'Курск и Курская область на карте России: экология, экономика, история, культура, туризм',
        description:
            'Курская область на карте России: подробная информация об экологии, экономике, истории, культуре и туризме региона.',
        url: 'https://kursk-region.ru',
        siteName: 'Курская область',
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Курск и Курская область на карте России',
        description:
            'Подробная информация об экологии, экономике, истории, культуре и туризме региона',
    },
};

export default function HomePage() {
    return (
        <>
            <EnterVideo />
            <DescriptionRegion />
        </>
    );
}
