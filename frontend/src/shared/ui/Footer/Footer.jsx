import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Благодарю вас за посещение моего сайта!</p>
            <p>Обратите внимание: данный ресурс не является официальным источником информации.</p>
            <p>
                Политика конфиденциальности:{' '}
                <Link href="/privacy_policy">Политика конфиденциальности.</Link>
            </p>
            <p>
                Все источники текста и картинок сайта: <Link href="/sources">Источники.</Link>
            </p>
        </footer>
    );
};

export default Footer;
