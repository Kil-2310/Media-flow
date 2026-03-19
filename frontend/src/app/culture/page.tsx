import type { Metadata } from "next"

import PreviewArticle from "@/shared/ui/PreviewArticle"
import IntroductoryTextArticle from "@/shared/ui/IntroductoryTextArticle"
import SmallDescriptionCards from "@/shared/ui/SmallDescriptionCards"
import AsideBlock from "@/shared/ui/AsideBlock"
import SimpleCards from "@/shared/ui/SimpleCards"

export const metadata: Metadata = {
  title: "Культура Курской области: традиции, промыслы и достопримечательности Соловьиного края",
  description: "Погрузитесь в самобытную культуру Курской области. Узнайте о народных промыслах (кожлянская игрушка, суджанское ковроткачество), знаменитых фестивалях, православных святынях (Коренная пустынь) и символах региона — курском соловье и антоновке.",
  keywords: [
    "культура Курской области",
    "традиции Курского края",
    "достопримечательности Курска",
    "кожлянская игрушка",
    "суджанское ковроткачество",
    "народные промыслы Курской области",
    "гончарное дело Курск",
    "курская вышивка",
    "курский соловей",
    "памятник Курской антоновке",
    "Георгий Свиридов",
    "Александр Дейнека",
    "Серафим Саровский",
    "коренная каша",
    "традиционная курская кухня",
    "Курская Коренская ярмарка",
    "Коренная пустынь",
    "музей Дейнеки",
    "усадьба Фета",
    "цветные озера Железногорск",
    "фестиваль Соловьиная трель"
  ],
  authors: [{ 
    name: "Хомяков Евгений Алексеевич",
    url: "https://kursk-region.ru"
  }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://kursk-region.ru"),
  alternates: {
    canonical: "https://kursk-region.ru/culture",
  },
  openGraph: {
    title: "Культурное наследие Курской области: от кожлянской игрушки до соловьиных трелей",
    description: "Откройте для себя соловьиный край! Народные промыслы, православные святыни, музеи знаменитых земляков и уникальная природа — все это культура Курской области.",
    url: "https://kursk-region.ru/culture",
    siteName: "Курская область",
    images: [
      {
        url: "/images/region/culture.jpg",
        width: 1200,
        height: 630,
        alt: "Символы культуры Курской области: Курский соловей и кожлянская игрушка",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Культура Курской области: традиции, промыслы и символы",
    description: "Самобытная культура на стыке традиций. Курский соловей, антоновка, Коренная ярмарка и наследие Свиридова с Дейнекой.",
    images: ["/images/region/culture.jpg"],
  }
};

export default function CulturePage() {
    const articleName = 'culture'
    return (
        <>
            <PreviewArticle preview={articleName}/>

            <IntroductoryTextArticle articleName={articleName}/>

            <hr/>

            <h2 id="directions" className="title">Основные направления културы Курской области</h2>

            <SmallDescriptionCards cardsTitle={'cultural_trends'}/>

            <h2 id="nightingale" className="title">Курский соловей — пернатый символ соловьиного края</h2>

            <AsideBlock asideName={'kursk_nightingale'}/>

            <h2 id="personalities" className="title">Известные личности Курской области</h2>

            <SmallDescriptionCards cardsTitle={'notable_figures'}/>

            <h2 id="traditions" className="title">Традиции Курской области</h2>

            <SimpleCards TitleSimpleCards={'traditions'}/>
        </>
    )
}