import styles from './AsideBlock.module.scss';
import Image from 'next/image';
import dataAsideBlock from './dataAsideBlock';

const AsideBlock = ({ asideTitle }) => {
    const AsideData = dataAsideBlock[asideTitle];

    if (!AsideData) {
        return <p>Данные не найдены</p>;
    }

    return (
        <aside className={`${styles.aside_block}`}>
            <Image src={AsideData.image} alt={AsideData.alt} width={1000} height={500} />

            <div>
                <p>{AsideData.description}</p>
                {AsideData.audio && <audio src={AsideData.audio} controls />}
            </div>
        </aside>
    );
};

export default AsideBlock;
