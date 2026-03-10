import React from "react";
import styles from './styles.module.scss'

const BlockEcology = () => {
  
  return (
    <section className={`${styles.articles_about_region__block}`}>
      <aside className={`${styles.articles_about_region__image}`}>
        <img src='/images/region/ecology.jpg' alt='Экология Курской области' />
        <a target='_blank' href=''>Экология Курской области</a>
      </aside>
      <aside className={`${styles.articles_about_region__links}`}>
        <ul className="simple_text">
          <li>🌿 <a target='_blank' href=''>Проблемы экологии Курской области и их решения</a>.</li>
          <li>🌿 <a target='_blank' href=''>Центрально-Чернозёмный государственный природный биосферный заповедник имени профессора В. В. Алёхина</a>.</li>
          <li>🌿 <a target='_blank' href=''>3 основные характеристики экологии Курской области: климат, гидрография и рельеф</a>.</li>
          <li>🌿 <a target='_blank' href=''>Красная книга региона</a>.</li>
          <li>🌿 <a target='_blank' href=''>Национальные проекты: 'Сохранение лесов'</a>.</li>
        </ul>
      </aside>
    </section>
  );
};

export default BlockEcology;