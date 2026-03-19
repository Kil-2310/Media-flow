import type { Metadata } from "next"

import PreviewArticle from "@/shared/ui/PreviewArticle"
import IntroductoryTextArticle from "@/shared/ui/IntroductoryTextArticle"
import ImageSimpleCards from "@/shared/ui/ImageSimpleCards"
import SmallDescriptionCards from "@/shared/ui/SmallDescriptionCards"
import AsideBlock from "@/shared/ui/AsideBlock"
import PieChart from "@/shared/ui/PieChart"


export default function CulturePage() {
    const articleName = 'economy'
    
    return (
        <>
            <PreviewArticle preview={articleName}/>

            <IntroductoryTextArticle articleName={articleName}/>

            <hr/>

            <h2>Анализ ВРП Курской области</h2>

            <PieChart />

            <h2>Курская магнитная аномалия</h2>

            <AsideBlock asideTitle={'kursk_magnetic_anomaly'}/>
        </>
    )
}