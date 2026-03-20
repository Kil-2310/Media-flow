import styles from './PreviewArticle.module.scss';
import dataPreviewArticle from './dataPreviewArticle';
import Image from 'next/image';

const PreviewArticle = ({ preview }) => {
    const previewData = dataPreviewArticle[preview];

    return (
        <section className={`${styles.preview_article}`}>
            <Image src={previewData[1]} alt={`Превью ${previewData[0]}`} width={900} height={600} />
            <h1>{previewData[0]}</h1>
        </section>
    );
};

export default PreviewArticle;
