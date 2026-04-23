import dataArticles from './dataArticles.js';
import styles from './styles.module.scss';
import Image from 'next/image.js';

const BlockArticles = () => {
    const formatLinkToHTML = (link) => {
        return `${link.icon} <a href="${link.href}">${link.text}</a>${link.description}`;
    };

    return (
        <section>
            <h2>Статьи о Курской области</h2>

            {dataArticles.map((article, index) => (
                <section key={index} className={styles.articles_about_region}>
                    <aside className={styles.image}>
                        <Image src={article.image} alt={article.alt} width={100} height={200} />
                        <a href="${article.titleLink}">{article.title}</a>
                    </aside>

                    <aside className={styles.links}>
                        <ul className="simple_text">
                            {article.links.map((item, idx) => {
                                const htmlString = formatLinkToHTML(item);
                                return (
                                    <li
                                        key={idx}
                                        dangerouslySetInnerHTML={{ __html: htmlString }}
                                    ></li>
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
