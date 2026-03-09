import React from "react";
import styles from './styles.module.scss'

const BlockTourism = () => {
  const imagePath = '@/shared/assets/images/region/cathedral.jpg';
  
  return (
    <section className={`${styles.articles_about_region__block}`}>
      <aside className={`${styles.articles_about_region__image}`}>
        <img src={imagePath} alt='Туризм в Курской области' />
        <a target='_blank' href=''>Туризм Курской области</a>
      </aside>
      <aside className={`${styles.articles_about_region__links}`}>
        <ul className="simple_text">
          <li>🌍 <a target='_blank' href='pages/region/tourism.html'>Инфраструктура туризма Курской области</a>.</li>
          <li>🌍 <a target='_blank' href='pages/region/tourism.html'>Популярные достопримечательности и места: Усадьба А. А. Фета, Марьино (усадьба Барятинских), Центр общественной информации Курской АЭС</a>.</li>
          <li>🌍 <a target='_blank' href='pages/region/tourism.html'>Уникальные природные объекты: Клюквенное озеро, Заказник «Гнилуша», Железногорский дендрологический парк, Гладиолусовые луга, Гора 'Фагор'</a>.</li>
        </ul>
      </aside>
    </section>
  );
};

export default BlockTourism;