import React from "react";
import styles from './styles.module.scss'

const BlockCulture = () => {
  
  return (
    <section className={`${styles.articles_about_region__block}`}>
      <aside className={`${styles.articles_about_region__image}`}>
        <img src='/images/region/culture.jpg' alt='Культура Курской области' />
        <a target='_blank' href=''>Культурный образ курской области</a>
      </aside>
      <aside className={`${styles.articles_about_region__links}`}>
        <ul className="simple_text">
          <li>✴ <a target='_blank' href=''>Известный личности</a>: Александр Александрович Дейнека, Георгий Васильевич Свиридов, Святитель Иоасаф Белгородский, Преподобный Серафим Саровский.</li>
          <li>✴ <a target='_blank' href=''>Основные направления культуры Курской области</a>: народные промыслы, учреждения культуры, фестивали, народная кухня, направления религии.</li>
          <li>✴ <a target='_blank' href=''>Традиции Курской области</a>: календарные, аграрные, войсковые, кулинарный, культурные.</li>
          <li>✴ <a target='_blank' href=''>Курский соловей</a>.</li>
        </ul>
      </aside>
    </section>
  );
};

export default BlockCulture;