'use client';
import { useRef } from 'react';

import styles from './Iframe.module.scss';

const Iframe = ({ mapSrc }) => {
    const iframeRef = useRef(null);

    const handleClick = () => {
        iframeRef.current.style.pointerEvents = 'auto';
    };
    const handleMouseLeave = () => {
        iframeRef.current.style.pointerEvents = 'none';
    };

    return (
        <aside
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
            className={styles.container_iframe}
        >
            <iframe
                ref={iframeRef}
                src={mapSrc}
                width="100%"
                height="100%"
                frameBorder="1"
                allowFullScreen
                loading="lazy"
                title="Курская область на карте России"
            />
        </aside>
    );
};

export default Iframe;
