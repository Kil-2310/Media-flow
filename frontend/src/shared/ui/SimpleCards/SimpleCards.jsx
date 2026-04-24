import styles from './SimpleCards.module.scss';
import dataSimpleCards from './dataSimpleCards';

const SimpleCards = ({ TitleSimpleCards }) => {
    const categoryData = dataSimpleCards[TitleSimpleCards];

    if (!categoryData) {
        return null;
    }

    return (
        <section className={styles.container}>
            {categoryData.map((category, idx) => (
                <aside key={idx} className={styles.simple_card}>
                    <strong>{category.category}</strong>

                    <ul>
                        {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                                {item.icon} <a href="${item.href}">{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </aside>
            ))}
        </section>
    );
};

export default SimpleCards;
