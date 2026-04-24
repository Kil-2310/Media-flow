import dataChronologicalSequence from './dataChronologicalSequence';
import styles from './ChronologicalSequence.module.scss';
import Image from 'next/image';

const ChronologicalSequence = ({ ChronologicalSequenceTitle }) => {
    const data = dataChronologicalSequence[ChronologicalSequenceTitle];

    const renderImageBlock = (img) => {
        return img ? (
            <Image src={img} alt="Декоративное изображение" width={300} height={300} className='html_image' />
        ) : (
            <div className={`${styles.darck_bg}`}></div>
        );
    };

    return (
        <section className={`${styles.chronological_sequence}`}>
            {data.map((item, index) => (
                <aside key={index}>
                    {item.html_id ? (
                        <strong id={item.html_id}>{item.year}</strong>
                    ) : (
                        <strong>{item.year}</strong>
                    )}

                    <div className={`${styles.chronological_sequence__flex_block}`}>
                        {index % 2 === 0 ? (
                            <>
                                <p>{item.description}</p>
                                {renderImageBlock(item.img)}
                            </>
                        ) : (
                            <>
                                {renderImageBlock(item.img)}
                                <p>{item.description}</p>
                            </>
                        )}
                    </div>
                </aside>
            ))}
        </section>
    );
};

export default ChronologicalSequence;
