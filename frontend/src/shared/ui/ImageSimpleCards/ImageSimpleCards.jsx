'use client';

import styles from './ImageSimpleCards.module.scss';
import dataSimpleCards from './dataImageSimpleCards';
import Image from 'next/image';

const ImageSimpleCards = ({ simpleCardsTitle }) => {
    const data = dataSimpleCards[simpleCardsTitle];

    if (!data || data.length === 0) {
        return <div>Нет данных для {simpleCardsTitle}</div>;
    }

    const visibleArea = [];
    const hiddenArea = [];

    data.slice(1).forEach((item, index) => {
        const element = (
            <a href='https://героиспецоперации.рф/' key={index} className={styles.image_simple_card}>
                <Image 
                    src={item.image} 
                    width={200} 
                    height={100} 
                    alt={item.alt || "Декоративная картинка"} 
                />
                <strong>{item.name}</strong>
            </a>
        );

        if (index <= 2) {
            visibleArea.push(element);
        } else {
            hiddenArea.push(element);
        }
    });

    return (
        <section className={styles.container}>\
            {data[0] && data[0] !== '' && <p>{data[0]}</p>}
            <div className={styles.cards}>{visibleArea}</div>

            {hiddenArea.length > 0 && (
                <details>
                    <summary>Показать еще {hiddenArea.length} материала</summary>
                    <div className={styles.cards}>{hiddenArea}</div>
                </details>
            )}
        </section>
    );
};

export default ImageSimpleCards;