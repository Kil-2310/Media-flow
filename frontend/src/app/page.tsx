import Head from 'next/head'
import './styles'

import EnterVideo from "@/shared/ui/EnterVideo"
import DescriptionRegion from "@/features/description_region"


export default function HomePage() {
  return (
    <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Курск и Курская область на карте России: экология, экономика, история, культура, туризм</title>

            {/* Canonical reference */}
            <link rel="canonical" href="https://kursk-region.ru" />

            {/* SEO Meta Tags */}
            <meta name="description" content="Курская область на карте России: подробная информация об экологии, экономике, истории, культуре и туризме региона. Достопримечательности, промышленность и природные особенности Курска." />
            <meta name="keywords" content="Курск, Курская область, карта России, экология Курска, экономика Курской области, история Курска, культура Курска, туризм в Курской области, достопримечательности Курска, природа Курской области" />
            
            {/* Author */}
            <meta name="author" content="Хомяков Евгений Алексеевич" />

            {/* Robots */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
        </Head>

        <EnterVideo />


    </>
  )
}