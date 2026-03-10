import styles from './styles.module.scss'

const BlockCities = () => {

    return (
        <section className={`${styles.articles_about_region__block}`}>
            <aside className={`${styles.articles_about_region__image}`}>
                <img src='/images/region/kursk_region_map.jpg' alt='Карта Курской области' />
                <a target='_blank' href=''>Города Курской области</a>
            </aside>
            <aside className={`${styles.articles_about_region__links}`}>
                <ul className="simple_text">
                <li>🏙️ <a target='_blank' href=''>Курск</a> — областной центр и древний город (основан в 1032 году), знаменитый своей литературной историей («Слово о полку Игореве») и крупнейшей в России Курской магнитной аномалией.</li>
                <li>🏙️ <a target='_blank' href=''>Курчатов</a> — самый молодой город области (основан в 1968 году) и город атомщиков, возникший как спутник Курской АЭС.</li>
                <li>🏙️ <a target='_blank' href=''>Железногорск</a> — второй по величине город региона и центр горнодобывающей промышленности, где ведется добыча и обогащение железной руды (Михайловский ГОК).</li>
                <li>🏙️ <a target='_blank' href=''>Льгов</a> — старинный город (известен с 1152 года) на берегу реки Сейм, тесно связанный с жизнью поэта Н.Н. Асеева и историей дворянского рода Барятинских.</li>
                <li>🏙️ <a target='_blank' href=''>Суджа</a> — небольшой город с богатой историей (известен с XVII века), важный транзитный пункт для российского газа, поступающего в Европу через газоизмерительную станцию.</li>
                </ul>
            </aside>
        </section>
    );
};

export default BlockCities;