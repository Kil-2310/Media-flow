import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <p>Благодарю вас за посещение моего сайта!</p>
            <p>Обратите внимание: данный ресурс не является официальным источником информации.</p>
            <p>Если вы хотите оставить отзыв о визите, воспользуйтесь ссылкой: <a target="_blank" href="">Комментарии.</a></p>
            <p>Политика конфиденциальности: <a target="_blank" href="">Политика конфиденциальности.</a></p>
            <p>Все источники текста и картинок сайта: <a target="_blank" href="">Источники.</a></p>
        </footer>
    )

}

export default Footer