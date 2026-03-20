'use client';

import styles from './ImageSimpleCards.module.scss';
import dataSimpleCards from './dataImageSimpleCards';
import Image from 'next/image';

const ImageSimpleCards = ({ TitleSimpleCards }) => {
    const data = dataSimpleCards[TitleSimpleCards];

    const visibleArea = [];
    const hiddenArea = [];

    data.map((item, index) => {
        const element = (
            <aside key={index} className={`${styles.container__image_simple_card}`}>
                <Image src={item[0]} width={200} height={100} alt="Декоративная картинка" />
                <strong>{item[1]}</strong>
            </aside>
        );

        if (index <= 2) {
            visibleArea.push(element);
        } else {
            hiddenArea.push(element);
        }
    });

    return (
        <section className={styles.container}>
            <div className={styles.container__cards}>{visibleArea}</div>

            {hiddenArea.length > 0 && (
                <details>
                    <summary>{hiddenArea.length} материалов</summary>
                    <div className={styles.container__cards}>{hiddenArea}</div>
                </details>
            )}
        </section>
    );
};

export default ImageSimpleCards;
