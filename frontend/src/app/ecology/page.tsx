import type { Metadata } from 'next';

import PreviewArticle from '@/shared/ui/PreviewArticle';
import IntroductoryTextArticle from '@/shared/ui/IntroductoryTextArticle';
import AsideBlock from '@/shared/ui/AsideBlock';
import SmallDescriptionCards from '@/shared/ui/SmallDescriptionCards';
import ImageSimpleCards from '@/shared/ui/ImageSimpleCards';

export const metadata: Metadata = {
    title: 'Экология и природа Курской области: климат, рельеф, заповедник имени Алёхина, Красная книга',
    description:
        'Узнайте об экологии и природе Курской области: климат, рельеф, реки, Центрально-Чернозёмный заповедник, экологические проблемы, лесовосстановление и редкие виды из Красной книги.',
    keywords: [
        'экология Курской области',
        'природа Курской области',
        'климат Курской области',
        'рельеф Курской области',
        'реки Курской области',
        'Центрально-Чернозёмный заповедник',
        'Красная книга Курской области',
        'экологические проблемы Курской области',
        'лесовосстановление Курской области',
        'охрана природы Курской области',
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
        canonical: 'https://kursk-region.ru/ecology',
    },
    openGraph: {
        title: 'Экология и природа Курской области: от климата до Красной книги',
        description:
            'Изучите уникальную природу Курской области: климатические особенности, рельеф, водные ресурсы, Центрально-Чернозёмный заповедник, экологические проблемы и меры по сохранению редких видов.',
        url: 'https://kursk-region.ru/ecology',
        siteName: 'Курская область',
        images: [
            {
                url: '/images/region/ecology.jpg',
                width: 1200,
                height: 630,
                alt: 'Природа и экология Курской области: ландшафты, заповедник, охрана окружающей среды',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Экология и природа Курской области: климат, рельеф, заповедник, Красная книга',
        description:
            'Уникальная природа Соловьиного края: климат, рельеф, реки, заповедник имени Алёхина, экологические проблемы и лесовосстановление.',
        images: ['/images/region/ecology.jpg'],
    },
};

export default function EcologyPage() {
    const articleTitle = 'ecology';

    return (
        <>
            <PreviewArticle previewTitle={articleTitle} />

            <IntroductoryTextArticle articleTitle={articleTitle} />

            <hr />

            <h2 id="environmental_characteristics">
                3 основне характеристики экологии Курской области
            </h2>

            <SmallDescriptionCards cardsTitle={'environmental_characteristics'} />

            <h2 id="state_nature_reserve">
                Центрально-Чернозёмный государственный природный биосферный заповедник имени
                профессора В. В. Алёхина
            </h2>

            <AsideBlock asideTitle={'state_nature_reserve'} />

            <h2 id="environmental_issues">Проблемы экологии Курской области</h2>

            <p className="simple_text">
                Несмотря на то, что Курская область остаётся одним из экологически благополучных
                регионов России, антропогенное воздействие в долгосрочной перспективе может привести
                к ухудшению экологического состояния территории. К основным современным
                экологическим проблемам области относятся:
            </p>

            <ImageSimpleCards simpleCardsTitle={'environmental_issues'} />

            <h2 id="forest_conservation_project">Красная книга Курской области</h2>

            <AsideBlock asideTitle={'forest_conservation_project'} />

            <h2 id="red_book">Проект “Сохранение лесов”</h2>

            <AsideBlock asideTitle={'red_book'} />
        </>
    );
}
