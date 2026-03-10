import {
    BlockCities,
    BlockTourism,
    BlockEconomy,
    BlockEcology,
    BlockHistory,
    BlockCulture
} from "@/shared/ui/BlocksArticle"

const BLOCK_COMPONENTS = {
    cities: BlockCities,
    tourism: BlockTourism,
    economy: BlockEconomy,
    ecology: BlockEcology,
    history: BlockHistory,
    culture: BlockCulture
}

const ArticlesAboutRegion = (props) => {
    const articles = Array.isArray(props) ? props : props.articles || []

    return (
        <section>
            <h2 className='title'>Статьи о Курской области</h2>
            
            {articles.map((article, index) => {
                const BlockComponent = BLOCK_COMPONENTS[article]
                
                if (!BlockComponent) return null
                
                return (
                    <BlockComponent key={index} />
                )
            })}
        </section>
    )
}

export default ArticlesAboutRegion