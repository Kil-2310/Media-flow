import type { Metadata } from "next"

import PreviewArticle from "@/shared/ui/PreviewArticle"
import IntroductoryTextArticle from "@/shared/ui/IntroductoryTextArticle"
import SmallDescriptionCards from "@/shared/ui/SmallDescriptionCards"
export default function CulturePage() {
    const articleName = 'culture'
    return (
        <>
            <PreviewArticle preview={articleName}/>

            <IntroductoryTextArticle articleName={articleName}/>

            <hr/>

            <h2 className="title">Основные направления културы Курской области</h2>

            <SmallDescriptionCards articleName={articleName}/>

            <h2 className="title">Курский соловей</h2>
        </>
    )
}