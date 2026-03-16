import Articles from './Articles.js'
import styles from './styles.module.scss'

const BlockArticles = ({ articles }) => {

    return (
        <section>
            <h2 className='title'>Статьи о Курской области</h2>

            {articles.map((el) => {
                const articleData = Articles[el]
                
                if (!articleData) return null
                
                return (
                    <section 
                        key={el}
                        className={styles.articles_about_region__block}
                    >
                        <aside className={styles.articles_about_region__image}>
                            <img 
                                src={articleData[0]} 
                                alt='Изображение для статьи' 
                            />
                            <div dangerouslySetInnerHTML={{ __html: articleData[1] }} />
                        </aside>
                        
                        <aside 
                            className={styles.articles_about_region__links}
                        >
                            <ul className="simple_text">
                                {articleData.slice(2).map((item, index) => {
                                    return <li key={index} dangerouslySetInnerHTML={{__html: item}}></li>
                                })}
                            </ul>
                        </aside>

                    </section>
                )
            })}
        </section>
    )
}

export default BlockArticles