import React from "react";
import styles from './styles.module.scss'

const BlockEconomy = () => {
  
  return (
    <section className={`${styles.articles_about_region__block}`}>
      <aside className={`${styles.articles_about_region__image}`}>
        <img src='/images/region/economy.jpg' alt='Экономика Курской области' />
        <a target='_blank' href=''>Экономика Курской области</a>
      </aside>
      <aside className={`${styles.articles_about_region__links}`}>
        <ul className="simple_text">
          <li>💵 <a target='_blank' href=''>Анализ ВРП региона</a>.</li>
          <li>💵 <a target='_blank' href=''>Курская магнитная аномалия (КМА)</a>.</li>
          <li>💵 <a target='_blank' href=''>Сравнительная таблица основных направлений ВРП Курской области</a>.</li>
        </ul>
      </aside>
    </section>
  );
};

export default BlockEconomy;