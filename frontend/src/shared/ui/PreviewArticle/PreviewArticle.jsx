import styles from './PreviewArticle.module.scss';
import dataPreviewArticle from './dataPreviewArticle';
import Image from 'next/image';

const PreviewArticle = ({ previewTitle }) => {
    const previewData = dataPreviewArticle[previewTitle];

    return (
        <section className={`${styles.preview_article} darck_bg`}>
            <Image
                src={previewData.image}
                alt={`Превью ${previewData.title}`}
                width={900}
                height={600}
                className='html_image'
            />
            <h1>{previewData.title}</h1>
        </section>
    );
};

export default PreviewArticle;
