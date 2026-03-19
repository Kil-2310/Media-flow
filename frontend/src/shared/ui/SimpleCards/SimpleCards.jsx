import styles from './SimpleCards.module.scss'
import dataSimpleCards from './dataSimpleCards'

const SimpleCards = ({ TitleSimpleCards }) => {
    const categoryData = dataSimpleCards[TitleSimpleCards]
    
    return (
        <section className={styles.container}>
            {Object.entries(categoryData).map(([category, items]) => (
                <aside key={category} className={styles.container__simple_card}>
                    <strong dangerouslySetInnerHTML={{ __html: category }} />
                    
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <span dangerouslySetInnerHTML={{ __html: item }} />
                            </li>
                        ))}
                    </ul>
                </aside>
            ))}
        </section>
    )
}

export default SimpleCards