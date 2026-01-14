async function create_header() {
    const header = document.querySelector('header')

    if (!header){
        console.log('Элемент header не обнаружен на странице')
        return
    }

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


async function create_settings_with_module_bg() {
    const settings_panel = document.getElementById('settings_panel')

    if (!settings_panel){
        console.log('Элемент settings_panel не обнаружен на странице')
        return
    }

    settings_panel.innerHTML = `
        <a href="https://webmaster.yandex.ru/siteinfo/?site=https://kursk-region.ru"><img width="88" height="31" alt="Иконка ИКС" border="0" border-radius="8" src="https://yandex.ru/cycounter?https://kursk-region.ru&theme=light&lang=ru"/></a>
        <p>Тема и опции для слабовидящих — в настройках справа.</p>
        <img id="settings" src="./png/settings.png" alt="Настройки">
    `;

    const settings = document.getElementById('settings')
    let rorate = 10
    const module_bg = document.createElement('div')
    module_bg.id = 'module_bg'

    settings.addEventListener('click', () => {
        rotate_settings()

        if (module_bg.childElementCount === 0){
            module_bg.innerHTML = `
                <section id="module_win">
                    <span id="exit_btn">X</span>
        
                    <aside id="font_size_el">
                        <p><strong>Размер шрифта</strong></p>
                        <div>
                            <button type="button" id="plus_btn">+</button>
                            <p id="changeable_font_size"><b>16</b></p>
                            <button type="button" id="minus_btn">-</button>
                        </div>
                    </aside>
        
                    <aside id="color_palette">
                        <p><strong>Цветовая палитра</strong></p>
                        <select name="" id="color_palette_select">
                            <option value="Светлая">Светлая</option>
                            <option value="Темная">Темная</option>
                            <option value="Упрощенная">Для слабовидящих</option>
                        </select>
                    </aside>
                </section>
            `

            document.body.appendChild(module_bg)
            
            module_bg.addEventListener('click', (e) => {
                if (e.target === module_bg || e.target.id === 'exit_btn') {
                    remove_wodule_window();
                }
            })
        }

        setTimeout(() => {
            module_bg.classList.add('active')
        }, 100)
    })
    
    function rotate_settings(offset = '+') {
        if (offset == '+') {rorate += 180} else {rorate -= 180}
        settings.style.transform = `rotate(${rorate}deg)`
    }

    function remove_wodule_window() {
        module_bg.classList.remove('active')
        rotate_settings('-')
    }


}

async function create_search() {
    const search_container = document.getElementById('search_container')

    if (!search_container){
        console.log('Элемент search_container не обнаружен на странице')
        return
    }

    search_container.innerHTML = `
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

// TODO Сделать полнаценную длгтку функции
async function create_articles_about_region() {
    const articles_about_region = document.getElementById('articles_about_region')

    if (!articles_about_region){
        console.log('Элемент articles_about_region не обнаружен на странице')
        return
    }

    articles_about_region.innerHTML = ``

}


export async function create_footer(data) {
    const footer = document.querySelector('footer')

    if (!footer){
        console.log('Элемент footer не обнаружен на странице')
        return
    }

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

    const footer_ul = document.querySelector('footer article ul');
    Object.entries(data).forEach(([key, value]) => {
        footer_ul.innerHTML += `
            <li><a class="just_text" target="_blank" href="${value}">${key}</a></li>
        `
    })
}

async function create_feedback() {
    const feedback = document.getElementById('feedback')

    if (!feedback){
        console.log('Элемент feedback не обнаружен на странице')
        return
    }

    feedback.innerHTML = `
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

document.addEventListener('DOMContentLoaded', () => {
    console.log('Назало загрузки из файла basic_markup_elements.js')

    create_header()
    create_search()
    create_settings_with_module_bg()
    create_feedback()

    console.log('Конец загрузки из файла basic_markup_elements.js')
})