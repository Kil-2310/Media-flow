import React from 'react'
import styles from './Header.module.scss'
import coatOfArms from '@/shared/assets/images/global/coat_arms_kursk_region.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.pc_menu}>
                <ul>
                    <li className={styles.pc_menu__logo}>
                        <a target='_blank' href='' rel='noopener noreferrer'>
                            <img src={coatOfArms} alt='Герб региона' />
                        </a>
                    </li>
    
                    <li className={styles.pc_menu__title_region}>
                        Курская
                        <small>область</small>
                    </li>
    
                    <li>
                        <select name='' id=''>
                            <option value='' selected>Культура</option>
                            <option value=''>Основные направления культуры</option>
                            <option value=''>Курский соловей</option>
                            <option value=''>Известные личности Курской области</option>
                            <option value=''>Традиции Курской области</option>
                        </select>
                    </li>
    
                    <li>
                        <select name='' id=''>
                            <option value='' selected>История</option>
                            <option value=''>История развития региона</option>
                            <option value=''>Революция 1917 года</option>
                            <option value=''>Курская АЭС</option>
                            <option value=''>Курская АЭС-2</option>
                            <option value=''>Последствия Чернобыльской катастрофы</option>
                            <option value=''>Курская дуга 1943 года</option>
                            <option value=''>Герои нашего времени</option>
                            <option value=''>Современные музеи, посвященные Специальной Военной Операции</option>
                        </select>
                    </li>
    
                    <li>
                        <select name='' id=''>
                            <option value='' selected>Экология</option>
                            <option value=''>3 основные характеристики экологии</option>
                            <option value=''>Центрально-Чернозёмный государственный заповедник</option>
                            <option value=''>Проблемы экологии</option>
                            <option value=''>Красная книга</option>
                            <option value=''>Проект &quot;Сохранение лесов&quot;</option>
                        </select>
                    </li>
    
                    <li>
                        <select name='' id=''>
                            <option value='' selected>Экономика</option>
                            <option value=''>Анализ ВРП Курской области</option>
                            <option value=''>Сравнительная таблица ключевых направлений ВРП</option>
                            <option value=''>Курская магнитная аномалия</option>
                        </select>
                    </li>
    
                    <li>
                        <select name='' id=''>
                            <option value='' selected>Туризм</option>
                            <option value=''>Инфраструктура туризма</option>
                            <option value=''>Популярные места и достопримечательности</option>
                            <option value=''>Уникальные природные объекты</option>
                        </select>
                    </li>
    
                    <li>
                        <a target='_blank' href='' rel='noopener noreferrer'>Отзывы</a>
                    </li>
    
                    <li>
                        <select name='' id=''>
                            <option value='' selected disabled>Города</option>
                            <option value=''>В разработке</option>
                        </select>
                    </li>
                </ul>
            </nav>
    
            <nav className={styles.burger_menu}>
                <a className={styles.burger_menu__logo} href='' target='_blank' rel='noopener noreferrer'>
                    <img src={coatOfArms} alt='Герб региона' />
                </a>
    
                <button className={styles.burger_menu__ui} aria-label='Открыть меню'>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
    
                <input type='checkbox' className={styles.burger_menu__checkbox} />
    
                <aside className={styles.burger_menu__panel}>
                    <ul>
                        <li>
                            <details>
                                <summary>Культура</summary>
                                <ul>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Основные направления культуры</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Курский соловей</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Известные личности Курской области</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Традиции Курской области</a></li>
                                </ul>
                            </details>
                        </li>
    
                        <li>
                            <details>
                                <summary>История</summary>
                                <ul>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>История развития региона</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Революция 1917 года</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Курская АЭС</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Курская АЭС-2</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Последствия Чернобыльской катастрофы</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Курская дуга 1943 года</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Герои нашего времени</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Современные музеи, посвященные Специальной Военной Операции</a></li>
                                </ul>
                            </details>
                        </li>
    
                        <li>
                            <details>
                                <summary>Экология</summary>
                                <ul>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>3 основные характеристики экологии</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Центрально-Чернозёмный государственный заповедник</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Проблемы экологии</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Красная книга</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Проект &quot;Сохранение лесов&quot;</a></li>
                                </ul>
                            </details>
                        </li>
    
                        <li>
                            <details>
                                <summary>Экономика</summary>
                                <ul>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Анализ ВРП Курской области</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Сравнительная таблица ключевых направлений ВРП</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Курская магнитная аномалия</a></li>
                                </ul>
                            </details>
                        </li>
    
                        <li>
                            <details>
                                <summary>Туризм</summary>
                                <ul>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Инфраструктура туризма</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Популярные места и достопримечательности</a></li>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>Уникальные природные объекты</a></li>
                                </ul>
                            </details>
                        </li>
    
                        <li><a href='' target='_blank' rel='noopener noreferrer'>Отзывы</a></li>
    
                        <li>
                            <details>
                                <summary>Города</summary>
                                <ul>
                                    <li><a href='' target='_blank' rel='noopener noreferrer'>В разработке</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </aside>
            </nav>
        </header>
    )
}

export default Header