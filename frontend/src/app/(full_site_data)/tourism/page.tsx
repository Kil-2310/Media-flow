import type { Metadata } from 'next';

import PreviewArticle from '@/shared/ui/PreviewArticle';
import IntroductoryTextArticle from '@/shared/ui/IntroductoryTextArticle';
import ImageSimpleCards from '@/shared/ui/ImageSimpleCards';
import SmallDescriptionCards from '@/shared/ui/SmallDescriptionCards';

export const metadata: Metadata = {
    title: 'Туризм в Курской области: достопримечательности, усадьбы, маршруты и отдых | Соловьиный край',
    description:
        'Полный гид по туризму в Курской области. Усадьба Фета, дворец Барятинских «Марьино», Коренная пустынь, музеи Курской битвы, гладиолусовые луга и гора Фагор. Гостиницы, базы отдыха, экскурсионные маршруты и туроператоры.',
    keywords: [
        'туризм Курская область',
        'достопримечательности Курской области',
        'отдых в Курской области',
        'усадьба Фета Воробьевка',
        'усадьба Марьино Рыльский район',
        'дворец Барятинских',
        'Коренная пустынь Курск',
        'Поныровский музей Курская битва',
        'музей Курской АЭС Курчатов',
        'гладиолусовые луга Карыж',
        'гора Фагор Суджа',
        'Клюквенное озеро Курская область',
        'дендропарк Железногорск',
        'заказник Гнилуша',
        'экскурсии по Курской области',
        'туры в Курскую область',
        'гостиницы Курская область',
        'санатории Курской области',
        'базы отдыха Курск',
        'туроператоры Курск',
        'экскурсионные маршруты Курск',
        'межрегиональный туристический маршрут',
        'отдых с детьми Курская область',
        'паломнические туры Коренная пустынь',
        'выходные в Курске',
        'природа Курского края',
        'усадьбы Курской области',
        'монастыри Курской области',
        'памятники Курской битвы',
        'рыльск достопримечательности',
        'суджанский район достопримечательности',
        'глушковский район природа',
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
        canonical: 'https://kursk-region.ru/tourism',
    },
    openGraph: {
        title: 'Туризм в Курской области: жемчужины Соловьиного края',
        description:
            'От усадьбы Фета до горы Фагор: дворцы, монастыри, заповедные луга и атомная энергетика. 90 туристических компаний, 134 гостиницы и 11 экскурсионных маршрутов ждут вас.',
        url: 'https://kursk-region.ru/tourism',
        siteName: 'Курская область',
        images: [
            {
                url: '/images/region/culture.jpg',
                width: 1200,
                height: 630,
                alt: 'Достопримечательности Курской области: усадьба Марьино и Коренная пустынь',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Туризм в Курской области: достопримечательности и маршруты',
        description:
            'Дворцы и усадьбы, святые места, музеи Курской битвы, клюквенные озера и гладиолусовые луга — все для вашего путешествия.',
        images: ['/images/region/culture.jpg'],
    },
};

export default function TourismPage() {
    const articleName = 'tourism';

    return (
        <>
            <PreviewArticle previewTitle={articleName} />

            <IntroductoryTextArticle articleTitle={articleName} />

            <hr />

            <h2 id="tourism_infrastructure">Инфраструктура туризма Курской области</h2>

            <p className="simple_text">
                По состоянию на 25.06.2020 г. туристская инфраструктура региона включает:
            </p>

            <ImageSimpleCards simpleCardsTitle={'tourism_infrastructure'} />

            <h2 id="attractions">Популярные места и достопремечательности Курской области</h2>

            <SmallDescriptionCards cardsTitle={'attractions'} />

            <p className="simple_text">
                Некоторые из объектов из этого списа были рассмотрены ранее: Центрально-Черноземный
                биосферный заповедник им. В. В. Алёхина, Парк “Патриот”, Горнальский
                Свято-Николаевский Белогорский мужской монастырь.
            </p>

            <h2 id="natural_attractions" className="title">
                Уникальные природные объекты Курской области
            </h2>

            <p className="simple_text">
                Один из уникальных природных объектов был рассмотрен ранее: Центрально-Черноземный
                биосферный заповедник им. В. В. Алёхина
            </p>

            <SmallDescriptionCards cardsTitle={'natural_attractions'} />
        </>
    );
}
