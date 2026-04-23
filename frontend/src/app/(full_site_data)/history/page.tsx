import type { Metadata } from 'next';

import PreviewArticle from '@/shared/ui/PreviewArticle';
import IntroductoryTextArticle from '@/shared/ui/IntroductoryTextArticle';
import AsideBlock from '@/shared/ui/AsideBlock';
import ImageSimpleCards from '@/shared/ui/ImageSimpleCards';
import ChronologicalSequence from '@/shared/ui/ChronologicalSequence';
import Slider from '@/shared/ui/Slider';

export const metadata: Metadata = {
    title: 'История Курской области: от древности до героев наших дней | Курская дуга, СВО, события',
    description:
        'История Курской области: первое упоминание в 1032 году, Курская битва, оккупация, послевоенное развитие, строительство Курской АЭС, чернобыльская катастрофа и современные герои СВО. Полная хронология с 1917 по 2025 год.',
    keywords: [
        'история Курской области',
        'Курская область история',
        'Курская дуга',
        'танковое сражение под Прохоровкой',
        'Курская битва 1943',
        'оккупация Курской области 1941-1943',
        'основание Курской области',
        'Курск город воинской славы',
        'чернобыльская катастрофа Курская область',
        'Курская АЭС история',
        'герои Курской области',
        'СВО Курская область',
        'музеи Курской области',
        'Бессмертный полк Курск',
        'история Курского края',
        'Курская губерния',
        'события Курской области',
        'развитие Курской области',
    ],
    authors: [{ name: 'Хомяков Евгений Алексеевич', url: 'https://kursk-region.ru' }],
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
        canonical: 'https://kursk-region.ru/history',
    },
    openGraph: {
        title: 'История Курской области: хронология событий от древности до наших дней',
        description:
            'Первое упоминание Курска – 1032 год. Курская дуга, освобождение от оккупации, строительство Курской АЭС, чернобыльская трагедия, подвиги героев СВО. Полная историческая хроника.',
        url: 'https://kursk-region.ru/history',
        siteName: 'Курская область',
        images: [
            {
                url: '/images/region/kurska_duga.jpg',
                width: 1200,
                height: 630,
                alt: 'Курская дуга – крупнейшее танковое сражение 1943 года',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'История Курской области: от Курской дуги до героев СВО',
        description:
            'Хронология ключевых событий: 1032 год, Курская битва, Курская АЭС, чернобыльская катастрофа, подвиги современных героев. Полная история региона.',
        images: ['/images/region/kurska_duga.jpg'],
    },
};

export default function HistoryPage() {
    const articleTitle = 'history';

    return (
        <>
            <PreviewArticle previewTitle={articleTitle} />

            <IntroductoryTextArticle articleTitle={articleTitle} />

            <hr />

            <h2 id="history_kursk_region">История развития Курской области</h2>

            <ChronologicalSequence ChronologicalSequenceTitle={'history_kursk_region'} />

            <h2 id="kursk_bulge">Курская дуга 1943 год</h2>

            <AsideBlock asideTitle={'kursk_bulge'} />

            <h2 id="heroes_our_time">Герои нашего времени</h2>

            <p className="simple_text">
                Сегодня, как и в годы Великой Отечественной, Курская земля вновь доказывает: наш
                народ един, когда речь идет о защите Родины. Вы можете ознакомиться с подвигами
                простых курян, волонтеров и всех, кому небезразлична судьба нашего народа, — в
                материалах: о подвиге курян и единстве после атак в приграничье; о героях Курской
                области и цене спасения мирных жителей; об открытии в Курске мемориальной доски
                герою СВО Владиславу Капле.
            </p>
            <p className="simple_text">
                Но, говоря о сегодняшних героях, мы не вправе забывать и тех, кто отдал свои жизни,
                сражаясь за Родину в годы Великой Отечественной войны. Бессмертный полк шагает по
                Курску и в наши дни — памятью, благодарностью и верой.
            </p>
            <p className="simple_text">
                С героями Специальной военной операции вы можете ознакомиться в разделе: «Герои
                Спецоперации РФ».
            </p>

            <ImageSimpleCards simpleCardsTitle={'heroes_our_time'} />

            <h2 id="museum_ponyri">
                Современные музеи, посвященные Специальной Военной Операции (СВО)
            </h2>

            <p className="simple_text">
                1941–1943 годы стали самым тяжёлым испытанием для Курской области — регион пережил
                фашистскую оккупацию, но в ходе легендарной Курской битвы (5 июля – 23 августа 1943
                года) советские войска не только освободили край, но и разгромили врага, повернув
                ход войны.
            </p>
            <p className="simple_text">
                Сегодня область вновь столкнулась с вызовами времени: в условиях СВО здесь
                открываются военно-патриотические музеи, призванные сохранить память о подвиге
                предков и современников. Один из таких музеев расположен в рабочем поселке Поныри,
                выше приведен один из его монументов.
            </p>

            <Slider SliderTitle={'museum_ponyri'} />
        </>
    );
}
