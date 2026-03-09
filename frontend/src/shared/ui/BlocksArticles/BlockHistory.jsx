import React from "react";
import styles from './styles.module.scss'

const BlockHistory = () => {
  const imagePath = '@/shared/assets/images/region/kurska_duga.jpg';
  
  return (
    <section className={`${styles.articles_about_region__block}`}>
      <aside className={`${styles.articles_about_region__image}`}>
        <img src={imagePath} alt='История Курской области' />
        <a target='_blank' href=''>История Курской области</a>
      </aside>
      <aside className={`${styles.articles_about_region__links}`}>
        <ul className="simple_text">
          <li>⭐ <a target='_blank' href=''>Познакомтесь с историей региона с 1917 года по наши дни</a>.</li>
          <li>⭐ <a target='_blank' href=''>Революция 1917 года</a>.</li>
          <li>⭐ <a target='_blank' href=''>Современные музеи, посвященные СВО</a>.</li>
          <li>⭐ <a target='_blank' href=''>Курская битва 1943 года</a>.</li>
          <li>⭐ <a target='_blank' href=''>Последствия Чернобыльской катастрофы 1986 года</a>.</li>
          <li>⭐ <a target='_blank' href=''>Курская АЭС-2</a>.</li>
          <li>⭐ <a target='_blank' href=''>Герои нашего времени</a>.</li>
        </ul>
      </aside>
    </section>
  );
};

export default BlockHistory;