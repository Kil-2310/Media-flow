import styles from './EnterVideo.module.scss'
import React from 'react'

const EnterVideo = () => {
    return (
        <section className={`${styles.enter_video}`}>
            <video 
                src="@/shared/assets/video/enter_video.mp4" 
                autoplay 
                loop 
                muted
                playsinline
                preload="auto"
            >
            </video>

            <h1>Курская область - наш соловьиный край</h1>
        </section>
    )
}

export default EnterVideo