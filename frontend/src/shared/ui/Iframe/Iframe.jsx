'use client'

import { useEffect } from 'react'
import styles from './Iframe.module.scss'

const Iframe = (props) => {
    const { mapSrc } = props

    useEffect(() => {
        const container = document.querySelector(`.${styles.container_iframe}`)
        const iframe = container?.querySelector('iframe')

        if (container && iframe) {
            iframe.style.pointerEvents = 'none'

            const handleClick = () => { iframe.style.pointerEvents = 'auto' }
            const handleMouseLeave = () => { iframe.style.pointerEvents = 'none' }

            container.addEventListener('click', handleClick)
            container.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                container.removeEventListener('click', handleClick)
                container.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    return (
        <aside className={styles.container_iframe}>
            <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                frameBorder="1"
                allowFullScreen
                loading="lazy"
                title="Курская область на карте России"
            />
        </aside>
    )
}

export default Iframe