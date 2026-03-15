'use client'

import styles from './Header.module.scss'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

const Header = () => {
    const router = useRouter()
    
    const ChangeLocation = (e) => {
        const to = e.target.value
        
        router.push(to, { scroll: false })
    }

    useEffect(() => {
        const totalSelect = document.querySelectorAll('select')

        totalSelect.forEach((el) => {
            el.value = ''
        })
    }, [])

    return (
        <header className={styles.header}>
            <nav className={styles.pc_menu}>
                <ul>
                    <li className={styles.pc_menu__logo}>
                        <Link href="/" aria-label="На главную">
                            <Image 
                                src='/images/global/coat_arms_kursk_region.png' 
                                alt="Герб Курской области" 
                                width={50} 
                                height={60}
                                priority
                            />
                        </Link>
                    </li>

                    <li className={styles.pc_menu__title_region}>
                        <Link href="/">
                            Курская
                            <small>область</small>
                        </Link>
                    </li>

                    <li>
                        <select onChange={ChangeLocation} name="culture" defaultValue="" aria-label="Раздел культуры">
                            <option value="">Культура</option>
                            <option value="/culture">Культура Курской области</option>
                            <option value="/culture/directions">Основные направления культуры</option>
                            <option value="/culture/nightingale">Курский соловей</option>
                            <option value="/culture/personalities">Известные личности Курской области</option>
                            <option value="/culture/traditions">Традиции Курской области</option>
                        </select>
                    </li>

                    <li>
                        <select onChange={ChangeLocation} name="history" defaultValue="" aria-label="Раздел истории">
                            <option value="">История</option>
                            <option value="/history">История Курской области</option>
                            <option value="/history/development">История развития региона</option>
                            <option value="/history/revolution">Революция 1917 года</option>
                            <option value="/history/npp">Курская АЭС</option>
                            <option value="/history/npp2">Курская АЭС-2</option>
                            <option value="/history/chernobyl">Последствия Чернобыльской катастрофы</option>
                            <option value="/history/kursk-bulge">Курская дуга 1943 года</option>
                            <option value="/history/heroes">Герои нашего времени</option>
                            <option value="/history/svo-museums">Современные музеи, посвященные СВО</option>
                        </select>
                    </li>

                    <li>
                        <select onChange={ChangeLocation} name="ecology" defaultValue="" aria-label="Раздел экологии">
                            <option value="">Экология</option>
                            <option value="/ecology">Экология Курской области</option>
                            <option value="/ecology/characteristics">3 основные характеристики экологии</option>
                            <option value="/ecology/reserve">Центрально-Чернозёмный государственный заповедник</option>
                            <option value="/ecology/problems">Проблемы экологии</option>
                            <option value="/ecology/red-book">Красная книга</option>
                            <option value="/ecology/forest-project">Проект &quot;Сохранение лесов&quot;</option>
                        </select>
                    </li>

                    <li>
                        <select onChange={ChangeLocation} name="economy" defaultValue="" aria-label="Раздел экономики">
                            <option value="">Экономика</option>
                            <option value="/economy">Экономика Курской области</option>
                            <option value="/economy/analysis">Анализ ВРП Курской области</option>
                            <option value="/economy/comparison">Сравнительная таблица ключевых направлений ВРП</option>
                            <option value="/economy/kma">Курская магнитная аномалия</option>
                        </select>
                    </li>

                    <li>
                        <select onChange={ChangeLocation} name="tourism" defaultValue="" aria-label="Раздел туризма">
                            <option value="">Туризм</option>
                            <option value="/tourism">Туризм Курской области</option>
                            <option value="/tourism/infrastructure">Инфраструктура туризма</option>
                            <option value="/tourism/places">Популярные места и достопримечательности</option>
                            <option value="/tourism/nature">Уникальные природные объекты</option>
                        </select>
                    </li>

                    <li>
                        <Link href="/reviews" target="_blank" rel="noopener noreferrer">
                            Отзывы
                        </Link>
                    </li>

                    <li>
                        <select name="cities" defaultValue="" aria-label="Города">
                            <option value="">Города</option>
                            <option value="/cities">Города Курской области</option>
                        </select>
                    </li>
                </ul>
            </nav>
    
            <nav className={styles.burger_menu}>
                <Link href="/" className={styles.burger_menu__logo} aria-label="На главную">
                    <Image 
                        src='/images/global/coat_arms_kursk_region.png'
                        alt="Герб Курской области" 
                        width={40} 
                        height={48}
                        priority
                    />
                </Link>
    
                <button className={styles.burger_menu__ui} aria-label="Открыть меню">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
    
                <input type="checkbox" className={styles.burger_menu__checkbox} />
    
                <aside className={styles.burger_menu__panel}>
                    <ul>
                        <li>
                            <details>
                                <summary>Культура</summary>
                                <ul>
                                    <li><Link href="/culture/directions">Основные направления культуры</Link></li>
                                    <li><Link href="/culture/nightingale">Курский соловей</Link></li>
                                    <li><Link href="/culture/personalities">Известные личности Курской области</Link></li>
                                    <li><Link href="/culture/traditions">Традиции Курской области</Link></li>
                                </ul>
                            </details>
                        </li>
    
                        <li>
                            <details>
                                <summary>История</summary>
                                <ul>
                                    <li><Link href="/history/development">История развития региона</Link></li>
                                    <li><Link href="/history/revolution">Революция 1917 года</Link></li>
                                    <li><Link href="/history/npp">Курская АЭС</Link></li>
                                    <li><Link href="/history/npp2">Курская АЭС-2</Link></li>
                                    <li><Link href="/history/chernobyl">Последствия Чернобыльской катастрофы</Link></li>
                                    <li><Link href="/history/kursk-bulge">Курская дуга 1943 года</Link></li>
                                    <li><Link href="/history/heroes">Герои нашего времени</Link></li>
                                    <li><Link href="/history/svo-museums">Современные музеи, посвященные Специальной Военной Операции</Link></li>
                                </ul>
                            </details>
                        </li>
    
                        <li>
                            <details>
                                <summary>Экология</summary>
                                <ul>
                                    <li><Link href="/ecology/characteristics">3 основные характеристики экологии</Link></li>
                                    <li><Link href="/ecology/reserve">Центрально-Чернозёмный государственный заповедник</Link></li>
                                    <li><Link href="/ecology/problems">Проблемы экологии</Link></li>
                                    <li><Link href="/ecology/red-book">Красная книга</Link></li>
                                    <li><Link href="/ecology/forest-project">Проект &quot;Сохранение лесов&quot;</Link></li>
                                </ul>
                            </details>
                        </li>
    
                        <li>
                            <details>
                                <summary>Экономика</summary>
                                <ul>
                                    <li><Link href="/economy/analysis">Анализ ВРП Курской области</Link></li>
                                    <li><Link href="/economy/comparison">Сравнительная таблица ключевых направлений ВРП</Link></li>
                                    <li><Link href="/economy/kma">Курская магнитная аномалия</Link></li>
                                </ul>
                            </details>
                        </li>
    
                        <li>
                            <details>
                                <summary>Туризм</summary>
                                <ul>
                                    <li><Link href="/tourism/infrastructure">Инфраструктура туризма</Link></li>
                                    <li><Link href="/tourism/places">Популярные места и достопримечательности</Link></li>
                                    <li><Link href="/tourism/nature">Уникальные природные объекты</Link></li>
                                </ul>
                            </details>
                        </li>
    
                        <li><Link href="/reviews">Отзывы</Link></li>
    
                        <li>
                            <details>
                                <summary>Города</summary>
                                <ul>
                                    <li><Link href="/cities">В разработке</Link></li>
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