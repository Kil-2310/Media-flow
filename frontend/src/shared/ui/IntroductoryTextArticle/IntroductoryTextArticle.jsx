import styles from './IntroductoryTextArticle.module.scss'
import dataIntroductoryTextArticle from './dataIntroductoryTextArticle'

const IntroductoryTextArticle = ({articleName}) => {
    return (
        <aside className={`${styles.introductory_text_article}`}>
            <p>{dataIntroductoryTextArticle[articleName]}</p>
        </aside>
    )
}

export default IntroductoryTextArticle