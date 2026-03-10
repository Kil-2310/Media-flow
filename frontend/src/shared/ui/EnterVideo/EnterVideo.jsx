// src/shared/ui/EnterVideo/EnterVideo.jsx
import styles from './EnterVideo.module.scss'

const EnterVideo = () => {

    return (
        <section className={styles.enter_video}>
            <video 
                src='/video/enter_video.mp4'
                autoPlay 
                loop 
                muted
                playsInline
                preload="auto"
            >
                <source src='video/enter_video.mp4' type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>

            <h1>Курская область - наш соловьиный край</h1>
        </section>
    )
}

export default EnterVideo