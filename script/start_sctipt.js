export async function create_header() {
    const header = document.createElement('header')

    header.innerHTML = `
    <!-- ПК меню -->
        <nav id="pc_menu" aria-label="Основное меню">
            <ul>
                <li>
                    <a title="Перейти на официальный сайт Курской области" target="_blank" href="https://kursk.ru/?i">
                        <img src="./png/coat_arms_kursk_region.png" alt="Герб Курской области">
                    </a>
                    <p>Курская<span>область</span></p>
                </li>

                <li>
                    <select class="header_select">
                        <option value="https://kursk-region.ru/" selected>Главная</option>
                        <option value="https://kursk-region.ru/">Курская область на карте России</option>
                        <option value="https://kursk-region.ru/">Статьи о Курской области</option>
                        <option value="https://kursk-region.ru/l">Цитаты о регионе</option>
                    </select>
                </li>
                
                <li>
                    <select class="header_select">
                        <option value="https://kursk-region.ru/pages/culture.html" selected>Культура</option>
                        <option value="https://kursk-region.ru/pages/culture.html">Направления культуры</option>
                        <option value="https://kursk-region.ru/pages/culture.html">Известные личности</option>
                        <option value="https://kursk-region.ru/pages/culture.html">Традиции, праздники</option>
                        <option value="https://kursk-region.ru/pages/culture.html">Статьи о регионе</option>
                    </select>
                </li>

                <li>
                    <select class="header_select">
                        <option value="https://kursk-region.ru/pages/history.html" selected>История</option>
                        <option value="https://kursk-region.ru/pages/history.html">История развития области</option>
                        <option value="https://kursk-region.ru/pages/history.html">Герои нашего времени</option>
                        <option value="https://kursk-region.ru/pages/history.html">Современные музеи военной истории</option>
                        <option value="https://kursk-region.ru/pages/history.html">Курская битва (дуга) 1943</option>
                    </select>
                </li>

                <li>
                    <select class="header_select">
                        <option value="https://kursk-region.ru/pages/ecology.html" selected>Экология</option>
                        <option value="https://kursk-region.ru/pages/ecology.html">Основные характеристики экологии</option>
                        <option value="https://kursk-region.ru/pages/ecology.html">Центрально-Чернозёмный заповедник В. В. Алёхина</option>
                        <option value="https://kursk-region.ru/pages/ecology.html">Красная книга региона</option>
                        <option value="https://kursk-region.ru/pages/ecology.html">Проект "Сохранение лесов"</option>
                    </select>
                </li>

                <li>
                    <select class="header_select">
                        <option value="https://kursk-region.ru/pages/tourism.html" selected>Туризм</option>
                        <option value="https://kursk-region.ru/pages/tourism.html">Инфраструктура туризма региона</option>
                        <option value="https://kursk-region.ru/pages/tourism.html">Популярные места и достопремечательности</option>
                        <option value="https://kursk-region.ru/pages/tourism.html">Уникальные природные объекты</option>
                        <option value="https://kursk-region.ru/pages/tourism.html">Туристические направления</option>
                    </select>
                </li>

                <li>
                    <select class="header_select">
                        <option value="https://kursk-region.ru/pages/economy.html" selected>Экономика</option>
                        <option value="https://kursk-region.ru/pages/economy.html">Структура ВРП региона 2012 года</option>
                        <option value="https://kursk-region.ru/pages/economy.html">Курская магнитная аномалия (КМА)</option>
                    </select>
                </li>

                <li><a href="https://kursk-region.ru/#feedback">Связь</a></li> 
            </ul>
        </nav>

        <!-- Бургер меню -->
        <nav id="burger_menu">
            <aside>
                <a target="_blank" href="https://kursk.ru/?i"><img title="Официальный герб Курской области, перейти на официальный сайт региона" src="./png/coat_arms_kursk_region.png" alt="Герб Курской области"></a>
                <p>Курская<br><span>область</span></p>
            </aside>

            <input type="checkbox" name="none" class="burger_menu_elements_position">
            
            <div id="horizontal_elements" class="burger_menu_elements_position">
                <span></span>
                <span></span>
                <span></span>
            </div>
        
            <ul id="menu">
                <li><a target="_blank" href="https://kursk-region.ru/">Главная</a></li>
                <li><a target="_blank" href="https://kursk-region.ru/pages/culture.html">Культура</a></li>
                <li><a target="_blank" href="https://kursk-region.ru/pages/history.html">История</a></li>
                <li><a target="_blank" href="https://kursk-region.ru/pages/ecology.html">Экология</a></li>
                <li><a target="_blank" href="https://kursk-region.ru/pages/economy.html">Экономика</a></li>
                <li><a target="_blank" href="https://kursk-region.ru/pages/tourism.html">Туризм</a></li>
                <li><a target="_blank" href="https://kursk-region.ru/#feedback">Обратная связь</a></li>
            </ul>
        </nav>
    `

    document.body.appendChild(header)

    window.addEventListener('scroll', () => {
        if (window.scrollY < 50) {
            header.classList.remove('active');
        } else {
            header.classList.add('active');
        }
    });

    const all_header_selects = document.querySelectorAll(".header_select");
    all_header_selects.forEach((selectElement) => {
        selectElement.addEventListener("change", (e) => {
            if (e.target.value.includes('#')) {
                window.open(e.target.value, '_blank');
            }else{
                window.location.href = e.target.value
            }
            e.target.value = ''
        });
    });
}


export async function create_settings_with_module_bg() {
    const settings_panel = document.createElement('aside');
    settings_panel.id = 'settings_panel';

    settings_panel.innerHTML = `
        <a href="https://webmaster.yandex.ru/siteinfo/?site=https://kursk-region.ru"><img width="88" height="31" alt="Иконка ИКС" border="0" border-radius="8" src="https://yandex.ru/cycounter?https://kursk-region.ru&theme=light&lang=ru"/></a>
        <p>Тема и опции для слабовидящих — в настройках справа.</p>
        <img id="settings" src="./png/settings.png" alt="Настройки">
    `;
    document.body.appendChild(settings_panel)

    const settings = document.getElementById('settings')
    let rorate = 10

    settings.addEventListener('click', () => {
        rotate_settings()
        // setTimeout(() => {
        //     module_win.classList.add('active')
        // }, 100)
    })

    // const module_win = document.createElement('div');
    // module_win.id = 'module_bg';

    // module_win.innerHTML = `
    //     <section id="module_win">
    //         <span id="exit_btn">X</span>

    //         <aside id="font_size_el">
    //             <p><strong>Размер шрифта</strong></p>
    //             <div>
    //                 <button type="button" id="plus_btn">+</button>
    //                 <p id="changeable_font_size"><b>16</b></p>
    //                 <button type="button" id="minus_btn">-</button>
    //             </div>
    //         </aside>

    //         <aside id="color_palette">
    //             <p><strong>Цветовая палитра</strong></p>
    //             <select name="" id="color_palette_select">
    //                 <option value="Светлая">Светлая</option>
    //                 <option value="Темная">Темная</option>
    //                 <option value="Упрощенная">Для слабовидящих</option>
    //             </select>
    //         </aside>
    //     </section>
    // `

    // // Настройки и фунуции для модального окна
    // const exit_btn = document.getElementById('exit_btn')
    

    function rotate_settings(offset = '+') {
        if (offset == '+') {rorate += 180} else {rorate -= 180}
        settings.style.transform = `rotate(${rorate}deg)`
    }

    // function remove_wodule_window() {
    //     module_win.classList.remove('active')
    //     rotate_settings('-')
    // }

    // module_win.addEventListener('click', (e) => {
    //     if (e.target === module_win) {
    //         remove_wodule_window();
    //     }
    // })
    // exit_btn.addEventListener('click', () => {
    //     remove_wodule_window()
    // })
}

export async function create_search() {
    document.getElementById('search_container').innerHTML = `
        <section id="search">
            <p>🔍</p>
            <input id="input_search" type="search" placeholder="Поиск информации на сайте">
        </section>
        <aside id="top_seven_of_search"></aside>
    `
    
    function update_top_seven_of_search() {
        top_seven_of_search.innerHTML = ''
        Object.keys(list_top_seven_of_search).forEach((key) => {
            top_seven_of_search.innerHTML += `<a class='search_value' href="${list_top_seven_of_search[key]}">${key}</a>`
        });
        list_top_seven_of_search = {}

    }

    const total_links_of_search = {
        'https://yandex.ru/': [
            'культура',
            'традиции',
            'праздники',
            'известные личности'
        ]
    }

    let list_top_seven_of_search = {}

    const top_seven_of_search = document.getElementById("top_seven_of_search");
    const input_search = document.getElementById("input_search");

    input_search.addEventListener("input", () => {
        const input_str = input_search.value.toLowerCase().split(' ')

        input_str.forEach((input_str_element) => {
            if (input_str_element) {
                Object.keys(total_links_of_search).forEach((key) => {
    
                    total_links_of_search[key].forEach((value) => {
                        if (value.includes(input_str_element)){
                            list_top_seven_of_search[value] = key
                        }
                    })
                })
            }
        })

        update_top_seven_of_search()
    })
}

export async function create_articles_about_region() {
    const articles_about_region = document.getElementById('articles_about_region');
    articles_about_region.innerHTML = `
    <h2>Статьи и публикации на тему Курской области</h2>

            <article>

                <h3>Статьи на тему культуры Курской области</h3>
                <ul id="links_for_culture">
                    <li>
                        <a href="#">Дом культуры</a>
                    </li>
                    <li>
                        <a href="#">Основные направления культуры</a>
                    </li>
                    <li>
                        <a href="#">Известные личности</a>
                    </li>
                    <li>
                        <a href="#">Традиции, праздники, обряды</a>
                    </li>
                </ul>

                <a href="https://kursk-region.ru/pages/culture.html" target="_blank">
                    <aside class="placeholder_beginning_chapter"
                        data-image="./img/drama_theater_for_main_page.jpg"
                        data-left-block="Культурный образ"
                        data-right-block=""
                        data-title-h="h4">
                    </aside>
                </a>

                <h3>Статьи на тему истории и развитии Курской области</h3>
                <ul id="links_for_history">
                    <li>
                        <a href="#">Развитие и биография Курской области</a>
                    </li>
                    <li>
                        <a href="#">Революция 1917 года</a>
                    </li>
                    <li>
                        <a href="#">Курская битва (дуга) 1943 года</a>
                    </li>
                    <li>
                        <a href="#">Современные музеи, посвященные военной истории (СВО)</a>
                    </li>
                    <li>
                        <a href="#">Курская атомная электростанция (Курской АЭС)</a>
                    </li>
                    <li>
                        <a href="#">Герои нашего времени</a>
                    </li>
                </ul>
                <a href="https://kursk-region.ru/pages/history.html">
                    <aside class="placeholder_beginning_chapter" 
                        data-image="./img/kurska_duga.jpg"
                        data-left-block="История"
                        data-right-block=""
                        data-title-h="h4">
                    </aside>
                </a>

                <h3>Статьи на тему экологии и природы Курской области</h3>
                <ul id="links_for_ecology">
                    <li>
                        <a href="#">Красная книга Курской области</a>
                    </li>
                    <li>
                        <a href="#">Основные характеристики экологии региона</a>
                    </li>
                    <li>
                        <a href="#">Проблемы экологии края</a>
                    </li>
                    <li>
                        <a href="#">Проект "Сохранение лесов" Курской области</a>
                    </li>
                </ul>

                <a href="https://kursk-region.ru/pages/ecology.html">
                    <aside class="placeholder_beginning_chapter" 
                        data-image="./img/ecology.jpg"
                        data-left-block="Экология"
                        data-right-block=""
                        data-title-h="h4">
                    </aside>
                </a>

                <h3>Статьи на тему экономики и ВРП Курской области</h3>
                <ul id="links_for_economy">
                    <li>
                        <a href="#">Курская магнитная аномалия (КМА)</a>
                    </li>
                    <li>
                        <a href="#">Анализ и структура экономики Курской области</a>
                    </li>
                    <li>
                        <a href="#">ВРП Курской области</a>
                    </li>
                </ul>

                <a href="https://kursk-region.ru/pages/economy.html">
                    <aside class="placeholder_beginning_chapter" 
                        data-image="./img/economy.jpg"
                        data-left-block="Экономика"
                        data-right-block=""
                        data-title-h="h4">
                    </aside>
                </a>

                <h3>Статьи на тему туризма, достопремечательности Курской области</h3>
                <ul id="links_for_tourism">
                    <li>
                        <a href="#">Инфроструктура туризма Курской области</a>
                    </li>
                    <li>
                        <a href="#">Уникальные природные объекты</a>
                    </li>
                    <li>
                        <a href="#">Популярные места и достопремечательности</a>
                    </li>
                </ul>

                <a href="https://kursk-region.ru/pages/tourism.html">
                    <aside class="placeholder_beginning_chapter" 
                        data-image="./img/cathedral.jpg"
                        data-left-block="Туризм"
                        data-right-block=""
                        data-title-h="h4">
                    </aside>
                </a>
            </article>
    `
}


export async function create_footer(data) {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <aside>
            <div id="nightingale_div">
                <img src="./png/nightingale.png" alt="Картинка соловья">
            </div>
            <div id="nightingale_text" class="just_text">
                <p>Спасибо, что заглянули на мой сайт! Для меня Курская область — родной край. Уникальное сочетание богатой истории, культурных традиций и прекрасной природы создаёт здесь особый, неповторимый мир.</p>
                <p><a href="./other/privacy-policy.html" target="_blank">Политика конфиденциальности</a></p>
                <p><a href="./other/contacts.html" target="_blank">Контакты</a></p>
            </div>
        </aside>

        <h3>Источники</h3>
        <article>
            <ul></ul>
        </article>
    `

    // const footer_ul = document.querySelector('footer ul');
    // Object.entries(data).forEach(([key, value]) => {
    //     footer_ul.innerHTML += `
    //         <li><a class="just_text" target="_blank" href="${key}">${value}</a></li>
    //     `
    // })
}

export async function create_feedback() {
    document.getElementById('feedback').innerHTML = `
        <h2>Обратная связь</h2>

        <p class="just_text">Разработчиком данного сайта является студент ГБПОУ МО “Воскресенский колледж”. Ссылка на другую мою работу: <a target="_blank" href="https://the-bright-sign.ru">Сайт "Яркий знак"</a>.</p>

        <article id="form_article">

            <div id="form_article_div">
                <img id="letter_image" src="./png/letter.png" alt="Изображение письма">
            </div>
            
            <form action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="2f1f0478-ef9d-4435-9275-32265dc800bd">
                
                <h3>Форма обратной связи</h3>

                <textarea minlength="5" maxlength="140" name="message" id="text" placeholder="Ваше сообщение" required></textarea>

                <button type="submit">Отправить</button>
            </form>
        </article>

        <div id="info_sources">
            <p class="just_text">Сайт являетмя неофициальным источником информации Курской области. Вся информация на ресурсе бралась из открытых источников и может не соответствовать действительности.</p>
        </div>
    `
}