import dataArticles from './dataArticles.js';
import styles from './styles.module.scss';
import Image from 'next/image.js';

const BlockArticles = () => {

    return (
        <>
            <h2>Статьи о Курской области</h2>

            {dataArticles.map((article, index) => (
                <section key={index}>
                    <aside className={styles.article}>
                        <Image src={article.image} alt={article.alt} width={100} height={200}/>
                        <a href="${article.titleLink}">{article.title}</a>
                    </aside>

                    <aside className={styles.links}>
                        <ul className="simple_text">
                            {article.links.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        {item.icon} <a href="${link.href}">{item.text}</a>{item.description}
                                    </li>
                                );
                            })}
                        </ul>
                    </aside>
                </section>
            ))}
        </>
    );
};

export default BlockArticles;
