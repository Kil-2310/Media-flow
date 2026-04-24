import styles from './SmallDescriptionCards.module.scss';
import dataSmallDescriptionCards from './dataSmallDescriptionCards';
import Image from 'next/image';

const SmallDescriptionCards = ({ cardsTitle }) => {
    const cardsData = dataSmallDescriptionCards[cardsTitle];

    return (
        <section className={`${styles.container_small_cards}`}>
            {Object.entries(cardsData).map(([title, { description, image, alt, href }]) => (
                <aside key={title} className={`${styles.card}`}>
                    <h3>{title}</h3>
                    <div>
                        <Image src={image} alt={alt || title} width={900} height={200} className='html_image' />
                        <div>
                            <p>{description}</p>
                            <a href={href}>Подробнее</a>
                        </div>
                    </div>
                </aside>
            ))}
        </section>
    );
};

export default SmallDescriptionCards;