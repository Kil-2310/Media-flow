import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <p className='small_text'>Благодарю вас за посещение моего сайта!</p>
            <p className='small_text'>Обратите внимание: данный ресурс не является официальным источником информации.</p>
            <p className='small_text'>Если вы хотите оставить отзыв о визите, воспользуйтесь ссылкой: <a target="_blank" href="pages/region/comments.html">Комментарии.</a></p>
            <p className='small_text'>Политика конфиденциальности: <a target="_blank" href="pages/other/privacy_policy.html">Политика конфиденциальности.</a></p>
            <p className='small_text'>Все источники текста и картинок сайта: <a target="_blank" href="pages/other/sources.html">Источники.</a></p>
        </footer>
    )

}

export default Footer