import styles from './SmallDescriptionCards.module.scss';
import dataSmallDescriptionCards from './dataSmallDescriptionCards';
import Image from 'next/image';

const SmallDescriptionCards = ({ cardsTitle }) => {
    const cardsData = dataSmallDescriptionCards[cardsTitle];

    return (
        <section className={`${styles.container_small_cards}`}>
            {Object.entries(cardsData).map(([title, [description, image, link]]) => (
                <aside key={title} className={`${styles.container_small_cards__card}`}>
                    <h3>{title}</h3>
                    <div>
                        <Image src={image} alt={title} width={900} height={200} />
                        <div>
                            <p>{description}</p>
                            <a href={link}>Подробнее</a>
                        </div>
                    </div>
                </aside>
            ))}
        </section>
    );
};

export default SmallDescriptionCards;
