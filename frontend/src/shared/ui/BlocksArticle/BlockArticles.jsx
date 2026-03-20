import dataArticles from './dataArticles.js';
import styles from './styles.module.scss';

const BlockArticles = () => {
    return (
        <section>
            <h2>Статьи о Курской области</h2>

            {dataArticles.map((article, index) => (
                <section key={index} className={styles.articles_about_region__block}>
                    <aside className={styles.articles_about_region__image}>
                        <img src={article[0]} alt="Изображение для статьи" />
                        <span dangerouslySetInnerHTML={{ __html: article[1] }} />
                    </aside>

                    <aside className={styles.articles_about_region__links}>
                        <ul className="simple_text">
                            {article.slice(2).map((item, index) => {
                                return (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                                );
                            })}
                        </ul>
                    </aside>
                </section>
            ))}
        </section>
    );
};

export default BlockArticles;
