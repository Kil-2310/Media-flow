function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

// Окно с информацией
// const info_win_btn = document.getElementById('info_win_btn')
// const info_win = document.getElementById('info_win') // Добавлено отсутствующее определение
// info_win_btn.addEventListener('click', () => {
//     info_win.style.display = 'none'
// })

// Проверка браузера пользователя

// function detectBrowserByVendor() {
//     const vendor = navigator.vendor;
    
//     if (vendor.includes("Yandex")) {
//         const container = document.createElement('div');
//         container.style.cssText = 'position:relative;overflow:hidden;width:100vw;height:100vh;';
        
//         const link1 = document.createElement('a');
//         link1.href = 'https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps';
//         link1.style.cssText = 'color:#eee;font-size:12px;position:absolute;top:0px;width:100vw;';
//         link1.textContent = 'Яндекс Карты';
        
//         const link2 = document.createElement('a');
//         link2.href = 'https://yandex.ru/maps/geo/kurskaya_oblast/53000040/?ll=36.300031%2C51.680046&utm_medium=mapframe&utm_source=maps&z=7';
//         link2.style.cssText = 'color:#eee;font-size:12px;position:absolute;top:14px;width:100vw;';
//         link2.textContent = 'Курская область — Яндекс Карты';

//         const iframe = document.createElement('iframe');
//         iframe.id = 'iframe_map';
//         iframe.src = 'https://yandex.ru/map-widget/v1/?ll=36.300031%2C51.680046&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA0MBIr0KDQvtGB0YHQuNGPLCDQmtGD0YDRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCIKDUV8EEIV2iNOQg%2C%2C&z=7';
//         iframe.width = '100%';
//         iframe.height = '100%';
//         iframe.frameBorder = '1';
//         iframe.allowFullscreen = true;
//         iframe.style.cssText = 'position:relative;';

//         container.appendChild(link1);
//         container.appendChild(link2);
//         container.appendChild(iframe);
        
//         return container;
//     } else {
//         const iframe = document.createElement('iframe');
//         iframe.id = 'iframe_map';
//         iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632329.067180087!2d35.4585185580859!3d51.75067776459236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412f0579d6594437%3A0xad02dfc2bf4338a8!2z0JrRg9GA0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1755610697730!5m2!1sru!2sru';
//         iframe.width = '600';
//         iframe.height = '450';
//         iframe.style.border = '0';
//         iframe.allowFullscreen = true;
//         iframe.loading = 'lazy';
//         iframe.referrerPolicy = 'no-referrer-when-downgrade';
        
//         return iframe;
//     }
// }

const container_iframe_map = document.getElementById('container_iframe_map');
// if (container_iframe_map) {
//     const mapContent = detectBrowserByVendor();
//     container_iframe_map.appendChild(mapContent);
    
//     // Обработчики событий
// }

const iframe_map = document.getElementById('iframe_map');
if (iframe_map) {
    container_iframe_map.addEventListener('click', () => {
        iframe_map.style.pointerEvents = 'auto';
    });
    
    iframe_map.addEventListener('mouseout', () => {
        iframe_map.style.pointerEvents = 'none';
    });
}
// Музыкальный плеер
// const control_music_player = document.getElementById('control_music_player')
// const music_player = document.getElementById('music_player')
// const music_player_array = ['./music/background_music_1.mp3', './music/background_music_2.mp3']
// let music_player_counter = 0

// function start_music(music_element) {
//     music_element.src = music_player_array[music_player_counter]
//     music_element.play()
// }

// control_music_player.addEventListener('click', () => {
//     if (music_player.paused) {
//         start_music(music_player)
//         control_music_player.textContent = '🔇'
//     } else {
//         music_player.pause()
//         control_music_player.textContent = '♬'
//     }
// })

// music_player.addEventListener('ended', () => {
//     music_player_counter = (music_player_counter + 1) % music_player_array.length
//     start_music(music_player)
// })

// culture - Intersection Observer
const observer_one = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('culture_visible')
            }, index * 300)
        }
    })
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
})

// history
const history_info = [
    {
        year: '1917 - 1918',
        text: 'После октябрьской революции большевиков в 1917 - 1918 во всех уездах Курской губернии установилась советская власть. Весной 1918 года южная и западная часть губернии были оккупированы немецкими войсками и до конца 1918 года входили в состав Украинской державы. Нейтральная зона проходила через Рыльск, Коренево и Суджу.',
        img: './img/photo_kurska_1917.jpg'
    },
    {
        year: '1919',
        text: 'В 1919 году Курская губерния стала ареной боев между Вооружёнными силами Юга России под командованием Деникина и частями Красной Армии. К концу сентября 1919 вся территория контролировалась войсками Деникина, однако уже в 1919 году войска белых были отброшены к Харькову. После этого активных боевых действий на территории губернии не велось.',
        img: './img/photo_1919.jpg'
    },
    {
        year: '1928',
        text: '12 мая 1924 года произошло укрупнение уездов и волостей. Были упразднены Дмитриевский, Корочанский, Новооскольский, Обоянский, Путивльский, Суджанский, Тимский и Фатежский уезды, вместо Грайворонского создан Борисовский уезд. 1 июня 1925 года Борисовский уезд был снова переименован в Грайворонский.',
        img: ''
    },
    {
        year: '1934 - 1937',
        text: '13 июня 1934 года Центрально-Чернозёмная область была разделена на 2 региона: Воронежскую область и Курскую область. 18 января 1935 года была утверждена новая сеть районов Курской области. В состав региона входили 92 района и 21 город, из них 3 города областного подчинения: Курск, Орёл и Белгород. В 1937 году Курская область потеряла 25 северных районов.',
        img: './img/photo_1934_1937.jpg'
    },
    {
        year: '1941 - 1943',
        text: 'Во время ВОВ Курская область была оккупирована немецко-фашистскими войсками и частями союзников гитлеровской Германии (венгерскими, румынскими) в период со 2 октября 1941 года по 2 сентября 1943 года. Всего за годы оккупации на территории области фашистские захватчики и их сообщники убили 18099 мирных граждан и 9826 военнопленных.',
        img: './img/photo_1942.jpg'
    },
    {
        year: '1943',
        text: 'Курская битва (5 июля – 23 августа 1943 г.) — стратегические оборонительные и наступательные операции Красной армии по срыву наступления вермахта. Одно из ключевых сражений Второй мировой войны, в котором участвовало около 2 млн человек, 6 тысяч танков и 4 тысячи самолётов. Битва длилась 50 дней.',
        img: './img/photo_1943_1.jpg'
    },
    {
        year: '1954',
        text: '6 января 1954 года в связи с образованием новых областей из состава Курской области было передано: первой — 23 района, второй — 3 района. В составе Курской области осталось 36 районов. На 1 января 1960 года Курская область имела 33 района.',
        img: ''
    },
    {
        year: '1970 - 1980',
        text: 'В период с 1970 по 1980 в регионе активно развивалась промышленность и создавались научно-производственных объединения в сферах приборостроения и электротехники. Кроме того 19 декабря 1976 года был произведен запуск первого энергоблока Курской АЭС.',
        img: './img/photo_1970_1980.jpg'
    },
    {
        year: '1986',
        text: 'В 1986 году авария на Чернобыльской АЭС привела к выбросу радиоактивных веществ, которые достигли западных районов Курской области. Это вызвало повышенное содержание радионуклидов в почве и сельхозпродукции, нанеся ущерб местному сельскому хозяйству и здоровью людей.',
        img: './img/photo_1986.jpg'
    },
            {
        year: '2018',
        text: '2 июля 2018 года завершена заливка фундамента первого энергоблока Курской АЭС-2. Было уложено свыше 16 тыс. м³ бетонной смеси. Проект имеет ключевое значение для энергетики региона и страны. Пуск энергоблока запланирован на 2025 год.',
        img: './img/photo_2018.jpg'
    },
    {
        year: '2022 - 2025',
        text: 'В марте и августе 2024 года украинские подразделения совершили рейды на приграничные территории Курской области. Благодаря самоотверженности военных и местных жителей регион смог отстоять свой суверенитет, однако обстрелы приграничных районов продолжаются.',
        img: './img/photo_2022_2025.jpg'
    }
]

function renderHistoryFeed() {
    const placeholder = document.getElementById('placeholder_history_feed');
    if (!placeholder) return;
    
    // Очищаем контейнер безопасно
    placeholder.textContent = '';
    
    history_info.forEach((item, index) => {
        const reverse_class = index % 2 === 0 ? '' : 'reversed';
        
        // Создаем основные элементы
        const yearHeading = document.createElement('h5');
        yearHeading.className = 'container_history_h5';
        yearHeading.textContent = item.year;
        
        const aside = document.createElement('aside');
        aside.className = `container_history_markup ${reverse_class}`;
        
        // Создаем левый блок с текстом
        const leftArticle = document.createElement('article');
        leftArticle.className = 'container_history_left_block';
        
        const textParagraph = document.createElement('p');
        textParagraph.textContent = item.text;
        
        leftArticle.appendChild(textParagraph);
        
        // Создаем правый блок с изображением
        const rightArticle = document.createElement('article');
        rightArticle.className = 'container_history_right_block';
        
        // Добавляем изображение если есть
        if (item.img) {
            const img = document.createElement('img');
            img.loading = 'lazy';
            img.src = item.img;
            img.className = 'container_history_right_block_img';
            img.alt = `Историческое фото: ${item.year}`;
            rightArticle.appendChild(img);
        }
        
        // Собираем структуру
        aside.appendChild(leftArticle);
        aside.appendChild(rightArticle);
        
        // Добавляем в контейнер
        placeholder.appendChild(yearHeading);
        placeholder.appendChild(aside);
    });
}

// Military Museum Gallery
function initMilitaryMuseumGallery() {
    const images = ['./img/military_museum_1.jpg', './img/military_museum_2.jpg', './img/military_museum_3.jpg']
    const img_element = document.getElementById('military_museum_img')
    const prev_button = document.querySelector('#military_museum .go_button:first-of-type')
    const next_button = document.querySelector('#military_museum .go_button:last-of-type')
    
    let current_index = 0
    
    img_element.src = images[current_index]
    
    function updateImage() {
        img_element.src = images[current_index]
        img_element.style.opacity = 0

        setTimeout(() => {
            img_element.style.opacity = 1
        }, 300)
    }
    
    prev_button.addEventListener('click', () => {
        current_index = (current_index - 1 + images.length) % images.length
        updateImage()
    })
    
    next_button.addEventListener('click', () => {
        current_index = (current_index + 1) % images.length
        updateImage()
    })
}

// Solders
const solders_info = [
    {
        image: './img/solder_1.webp',
        name: ['Дамир', 'Гилемханов'],
        link: 'https://героиспецоперации.рф/gilemhanov'
    },
    {
        image: './img/solder_2.webp',
        name: ['Александр', 'Белоглазов'],
        link: 'https://героиспецоперации.рф/beloglazov'
    },
    {
        image: './img/solder_3.webp',
        name: ['Дамир', 'Исламов'],
        link: 'https://героиспецоперации.рф/#rec599016888'
    },
    {
        image: './img/solder_4.webp',
        name: ['Антон', 'Старостин'],
        link: 'https://героиспецоперации.рф/starostina'
    },
    {
        image: './img/solder_7.webp',
        name: ['Дмитрий', 'Беляев'],
        link: 'https://героиспецоперации.рф/belyaev'
    },
    {
        image: './img/solder_6.webp',
        name: ['Сухарев', 'Сергей'],
        link: 'https://героиспецоперации.рф/suharev'
    },
]

function renderSolders() {
    const placeholder = document.getElementById('solders');
    if (!placeholder) return;
    
    placeholder.textContent = '';
    
    solders_info.forEach(item => {
        const soldierDiv = document.createElement('div');
        soldierDiv.className = 'solders_div';
        
        // Ссылка с фото
        const link = document.createElement('a');
        link.target = '_blank';
        link.href = item.link;
        link.rel = 'noopener noreferrer';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = `Фото солдата ${item.name.join(' ')}`;
        img.loading = 'lazy';
        
        link.appendChild(img);
        
        // Контейнер для имени
        const nameDiv = document.createElement('div');
        
        // Создаем отдельные элементы для имени и фамилии
        const firstName = document.createElement('span');
        firstName.textContent = item.name[0];
        firstName.style.display = 'block';
        
        const lastName = document.createElement('span');
        lastName.textContent = item.name[1];
        lastName.style.display = 'block';
        lastName.style.textIndent = '1em';
        
        nameDiv.appendChild(firstName);
        nameDiv.appendChild(lastName);
        
        soldierDiv.appendChild(link);
        soldierDiv.appendChild(nameDiv);
        placeholder.appendChild(soldierDiv);
    });
}

// ecology
const ecology_chapter = [
    { text: '🗻 Воздействие горного производства' },
    { text: '🌾 Влияние сельского хозяйства' },
    { text: '☢ Радиационное загрязнение' },
    { text: '🌏 Загрязнение воздуха и воды' },
    { text: '🗑 Отходы и мусор' }
]

const tourism_chapter = [
    { text: '90 туристических предприятий, 8 туроператоров'},
    { text: '134 коллективных средства размещения'},
    { text: '8 санаторных учреждений'},
    { text: '21 детский оздоровительный лагерь'},
    { text: '4 выставочных комплекса'},
    { text: '22 базы отдыха'},
    { text: '1 туристско-информационный центр'},
    { text: '11 основных экскурсионных маршрутов'},
    { text: '1 межрегиональный тур. маршрут'},
]

function create_small_cards(element, array) {
    const placeholder = document.querySelector(element);
    if (!placeholder) return;
    
    placeholder.textContent = '';
    
    array.forEach(item => {
        const cardDiv = document.createElement('div');
        const paragraph = document.createElement('p');
        const strong = document.createElement('strong');
        
        strong.textContent = item.text;
        paragraph.appendChild(strong);
        cardDiv.appendChild(paragraph);
        
        placeholder.appendChild(cardDiv);
    });
}

const observer_two = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible')
            }, index * 300)
        }
    })
}, {
    threshold: 0.2
})

// economy - Chart
const chart_element = document.getElementById('pie_chart')
const observer_three = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(creating_chart, 250)
        }
    })
}, {
    threshold: 0.6
})

function creating_chart(color_text='black') {
    const data = {
        labels: ['Транспорт 🛻', 'Сфера услуг 🛎', 'Индустрия 🏭', 'Энергетика ⚡', 'Сельское хозяйство 🌾', 'Остальные виды деятельности 💵'],
        datasets: [{
            data: [8, 26, 25, 12, 21, 7],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#bababaff'],
            borderWidth: 1
        }]
    }

    const ctx = document.getElementById('pie_chart').getContext('2d')
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: color_text,
                        font: {
                            size: function(context) {
                                const width = context.chart.width
                                if (width < 400) return 24
                                if (width <= 600) return 24
                                return 28
                            }
                        },
                        padding: 20,
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || ''
                            const value = context.raw || 0
                            const total = context.dataset.data.reduce((a, b) => a + b, 0)
                            const percentage = Math.round((value / total) * 100)
                            return `${label}: ${value} (${percentage}%)`
                        }
                    }
                }
            }
        }
    })
}

// JS - конструкторы

// beginning_chapter
function fun_create_placeholder_beginning_chapter() {
    const placeholders = document.querySelectorAll('.placeholder-beginning-chapter');

    placeholders.forEach(placeholder => {
        const container = document.createElement('div');
        container.innerHTML = `
            <section class="container_beginning_chapter">
                <img loading="lazy" class="container_beginning_chapter_img" src="${placeholder.dataset.image}" alt="Изображение начала главы">
                <h3 class="container_beginning_chapter_title">${placeholder.dataset.leftBlock} Курской области</h3>
                ${placeholder.dataset.rightBlock ? `<p class="container_beginning_chapter_bottom_text">${placeholder.dataset.rightBlock}</p>` : ''}
            </section>
        `;

        placeholder.replaceWith(container.firstElementChild);
    });
}

// Carousel
class Carousel {
    constructor(containerElement, slides) {
        this.container = containerElement
        this.slides = slides
        this.currentSlide = 0
        this.init()
    }
    
    init() {
        this.container.textContent = '';
        const slide = this.slides[this.currentSlide];
        
        // Создаем элементы
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.className = 'info_card_img';
        img.src = slide.image;
        img.alt = slide.title;
        
        const section = document.createElement('section');
        section.className = 'info_cards';
        
        // Левый блок
        const leftAside = document.createElement('aside');
        leftAside.className = 'left_card_block';
        
        const h5 = document.createElement('h5');
        h5.textContent = slide.title;
        
        const p = document.createElement('p');
        p.textContent = slide.text;
        
        const linkAside = document.createElement('aside');
        const a = document.createElement('a');
        a.target = '_blank';
        a.href = slide.link;
        a.textContent = 'Узнать больше';
        a.rel = 'noopener noreferrer';
        
        // Правый блок
        const rightAside = document.createElement('aside');
        rightAside.className = 'right_card_block';
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'prev-btn go_button';
        prevBtn.textContent = '←';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'next-btn go_button';
        nextBtn.textContent = '→';
        
        // Индикатор
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator';
        
        // Собираем структуру
        linkAside.appendChild(a);
        leftAside.appendChild(h5);
        leftAside.appendChild(p);
        leftAside.appendChild(linkAside);
        
        rightAside.appendChild(prevBtn);
        rightAside.appendChild(nextBtn);
        
        section.appendChild(leftAside);
        section.appendChild(rightAside);
        
        this.container.appendChild(img);
        this.container.appendChild(section);
        this.container.appendChild(indicator);

        if (this.container.classList.contains('carousel_right_text')) {
            const left_card_block = this.container.querySelector('.left_card_block')
            const info_cards = this.container.querySelector('.info_cards')
            left_card_block.style.order = 1
            info_cards.style.backgroundImage = `linear-gradient(90deg, transparent 0% 44%, rgba(0,0,0,0.7)45% 100%)`
        }
        
        this.container.querySelector('.prev-btn').addEventListener('click', () => this.prevSlide())
        this.container.querySelector('.next-btn').addEventListener('click', () => this.nextSlide())
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
        this.updateCarousel()
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length
        this.updateCarousel()
    }
    
    updateCarousel() {
        const slide = this.slides[this.currentSlide]
        const img = this.container.querySelector('.info_card_img')
        const title = this.container.querySelector('.left_card_block h5')
        const text = this.container.querySelector('.left_card_block p')
        const link = this.container.querySelector('.left_card_block a')
        
        img.style.opacity = 0
        
        setTimeout(() => {
            img.src = slide.image
            img.alt = `Изображение ${slide.title}`
            img.style.opacity = 1
            title.textContent = slide.title
            text.textContent = slide.text
            link.href = slide.link
        }, 300)
    }
}

const folk_crafts = [
    {
        image: './img/folk_crafts.jpg',
        title: 'Народные промыслы',
        text: 'Курская область славится своими народными промыслами: гончарное ремесло, резьба по дереву, вышивка, Суджанское ковроткачество, но самым запоминающимся среди туристов и местных жителей считается - Кожлянская глиняная игрушка.',
        link: 'https://welcomekursk.ru/overviews/140/kurskie-promysly'
    },
    {
        image: './img/drama_theater.jpg',
        title: 'Учреждения культуры',
        text: 'Культурные учреждения Курской области: музеи, театры, филармонии, дома культуры -  отражают ее многовековую историю, культуру и уникальный быт. Все они играют важную роль в жизни людей: сохраняют память, развивают кругозор и обучают подрастающее поколение.',
        link: 'https://www.culture.ru/traditions/doma-kultury-i-kluby/location-kurskaya-oblast'
    },
    {
        image: './img/religion.jpg',
        title: 'Религия',
        text: 'Курская земля во все времена славилась большим влечением к религиозным традициям. В связи с чем на этой земле было построено большое количество религиозных учреждений: Коренная Рождество-Богородицкая пустынь, Знаменский мужской монастырь и т.д.',
        link: 'https://ru.wikipedia.org/wiki/Коренная_пустынь'
    },
    {
        image: './img/festivals_holidays.jpg',
        title: 'Фестивали и праздники',
        text: 'По сей день в Курской области уделяется особое внимание фестивалям и традициям, отражающим ее культуру, быт и исторические традиции. Самыми популярными из которых являются: Курская Коренская ярмарка (июнь), День города Курска (25 сентября), Военная реконструкция «Курская дуга» (июль–август).',
        link: 'https://welcomekursk.ru/events/50913/festival-den-urozhaya-oseniny-2025'
    },
    {
        image: './img/traditional_cuisine.jpg',
        title: 'Традиционная кухня',
        text: 'Традиционная кухня Курской области это простая, но вкусная еда, приготовленная из ржи, гречихи, картофеля, молока, грибов, ягод и мяса. Влияние украинской и южнорусской кухни придало ей особый колорит.',
        link: 'https://welcomekursk.ru/overviews/8/blyuda-tradicionnoi-kukhni-kurskoi-oblasti'
    }
]

const famous_personalities = [
    {
        image: './img/serafim_sarovsky.jpg',
        title: 'Преподобный Серафим Саровский',
        text: 'Преподобный Серафим Саровский, в миру Прохор Мошнин, был саровским иеромонахом, который основал Дивеевскую женскую обитель и стал её небесным покровителем. Его прославили в лике преподобных в 1903 году по инициативе российского императора Николая II.',
        link: 'https://ru.wikipedia.org/wiki/Серафим_Саровский'
    },
    {
        image: './img/st_loasaph_belgorod.jpg',
        title: 'Святитель Иоасаф Белгородский',
        text: 'С 2 июня 1748 года святитель Иоасаф (в миру — Иоаким Андреевич Горленко) занимал кафедру епископа Белгородского и Обоянского, являясь правящим архиереем этой епархии Русской православной церкви.',
        link: 'https://azbyka.ru/days/sv-ioasaf-belgorodskij'
    },
    {
        image: './img/st_george_victorious.jpg',
        title: 'Георгий Победоносец',
        text: 'Святой Георгий Победоносец, почитавшийся на Руси как защитник воинства, при Дмитрии Донском стал покровителем Москвы. Его изображение стало гербом московских государей и позднее вошло в российский государственный герб.',
        link: 'https://ru.wikipedia.org/wiki/Георгий_Победоносец'
    },
    {
        image: './img/konstantin_rokossovsky.jpg',
        title: 'Константин Рокоссовский',
        text: 'Маршал Советского Союза Константин Константинович Рокоссовский (1896–1968) — выдающийся военачальник, внёсший огромный вклад в победу в Великой Отечественной войне. Он удостоен высших знаков отличия: дважды Герой Советского Союза и кавалер ордена «Победа».',
        link: 'https://ru.ruwiki.ru/wiki/Рокоссовский,_Константин_Константинович'
    },
    {
        image: './img/nikolai_pirogov.jpg',
        title: 'Николай Пирогов',
        text: 'Николай Иванович Пирогов — выдающийся русский хирург, основоположник военно-полевой хирургии и анестезии в России. Создал первый в мире атлас топографической анатомии.',
        link: 'https://www.litres.ru/author/nikolay-pirogov/about'
    },
    {
        image: './img/arkady_gaidar.jpg',
        title: 'Аркадий Гайдар',
        text: 'Аркадий Гайдар (настоящая фамилия Голиков) — известный советский писатель, автор любимых детских книг. Участник Гражданской и Великой Отечественной войн, работал военным корреспондентом.',
        link: 'https://ru.wikipedia.org/wiki/Гайдар,_Аркадий_Петрович'
    }
]
const ecology_cards = [
    {
        image: './img/kursk_winter.jpg',
        title: 'Климат',
        text: 'Среднегодовая температура в Курской области колеблется от +5,9°C на севере до +7,1°C на юго-западе. Летом средняя температура составляет около +20°C, зимой — от 0°C до -5°C. Абсолютный температурный максимум достигает +41°C, минимум — -40°C.',
        link: 'https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C'
    },
    {
        image: './img/landscape.jpg',
        title: 'Рельеф',
        text: 'Территория Курской области расположена на юго-западных склонах Среднерусской возвышенности. Характеризуется наличием древних и современных форм линейной эрозии — густой сети речных долин, оврагов и балок, расчленивших водораздельные поверхности, что создает слегка всхолмлённый равнинный рельеф.',
        link: 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fimg.pomuch.ru%2F56%2F17%2F569138-mewi_12.jpg&lr=10722&pos=0&rpt=simage&source=serp&text=рельеф%20курской%20области'
    },
    {
        image: './img/reservoir.jpg',
        title: 'Гидрография',
        text: 'Несмотря на густую речную сеть, водные ресурсы Курской области ограничены. Большая часть рек принадлежит к бассейну Днепра, меньшая — Дона. Всего в регионе 188 рек длиной более 10 км общей протяженностью около 5160 км.',
        link: 'https://ikur46.ru/wp-content/uploads/2023/04/8-klass-tema-2-vodnye-resursy-kurskoj-oblasti.pdf'
    },
]

const reverence_cards = [
    {
        image: './img/fet_estate.jpg',
        title: 'Усадьба А. А. Фета',
        text: 'Усадьба А. А. Фета — бывшее имение Афанасия Фета, ныне филиал Курского областного краеведческого музея, находящийся в деревне 1-я Воробьёвка. Усадебный дом стоит на высоком берегу реки Тускарь и окружён парком с прудом, а также усадебными строениями.',
        link: 'https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0_%D0%90._%D0%90._%D0%A4%D0%B5%D1%82%D0%B0'
    },
    {
        image: './img/marino.jpg',
        title: 'Марьино (усадьба Барятинских)',
        text: 'Марьино - усадьба князей Барятинских близ села Ивановского Рыльского района Курской области. Дворцово-парковый комплекс основан князем И. И. Барятинским в 1810-е годы.',
        link: 'https://ru.wikipedia.org/wiki/Марьино_%28усадьба_Барятинских%29'
    },
    {
        image: './img/ponyrovsky_museum.jpg',
        title: 'Поныровский историко-мемориальный музей Курской битвы',
        text: 'Экспозиция музея рассказывает о первых днях войны на территории района, оккупации, партизанском движении и освобождении района 13 февраля 1943 г. Большое количество материалов посвящено подготовке к сражению на Курской дуге и Поныровской оборонительной операции 5-11 июля 1943 г.',
        link: 'https://kursk-museum.ru/affiliates/ponyirovskiy-istoriko-memorialnyiy-m'
    },
    {
        image: './img/npp_museum.jpg',
        title: 'Центр общественной информации Курской АЭС',
        text: 'В центре Курска, в здании Краеведческого музея, расположена экспозиция, посвящённая нашему знаменитому земляку — академику И.В. Курчатову. Она была открыта в 1966 году, а к 100-летнему юбилею ученого в 2003 году была значительно обновлена.',
        link: 'https://dzen.ru/a/WmxQ6IZRZUEhbjPb'
    }
]

const nature_cards = [
    {
        image: './img/arboretum_park.jpg',
        title: 'Железногорский дендрологический парк',
        text: 'Дендропарк создавался в соответствии с рекомендациями ученых-ботаников. Сегодня в парке собраны растения из разных уголков земного шара. На территории в три гектара высажены более 3500 редких растений. Для удобства парк разделен на 34 сектора.',
        link: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_64650d31324a2f6697bb2817_651ed9478294f35673ed3173/scale_1200'
    },
    {
        image: './img/mount_phagor.jpg',
        title: 'Гора Фагор',
        text: 'Это памятник природы регионального значения. Она является самой высокой точкой области (вершина 275 метров над уровнем моря, а относительно окружающей местности — около 60 метров).',
        link: 'https://yandex.ru/maps/org/gora_fagor/210419898508/?ll=35.219178%2C51.062576&z=13'
    },
    {
        image: './img/gladiolus_meadows.jpg',
        title: 'Гладиолусовые луга',
        text: 'Всего в 150 километрах от Курска в Глушковском районе есть так называемый «гладиолусовый луг». Находится он возле деревни Карыж на берегу Сейма. В этих местах растет гладиолус тонкий, занесенный в Красную книгу Курской области. Его здесь так много, что во время цветения луг окрашивается в розовато-сиреневые тона.',
        link: 'https://gokursk.ru/objects/gladiolusovye-luga'
    },
    {
        image: './img/gnilushka_nature_reserve.jpg',
        title: 'Заказник "Гнилуша"',
        text: 'Заказник «Гнилуша» — зоологический природный заказник, расположенный на территории Петровского сельсовета, образован для сохранения экосистемы заболоченной поймы, охотничьих видов животных и бобра.',
        link: 'https://ru.wikipedia.org/wiki/Список_достопримечательностей_Курской_области'
    },
    {
        image: './img/cranberry_lake.jpg',
        title: 'Клюквенное озеро',
        text: 'Статус памятника природы регионального значения был официально утвержден в 2013 году. Особенностью озера является его плавучий остров, состоящий из растений. На территории водоёма обнаружено 187 видов сосудистых растений.',
        link: 'https://ru.wikipedia.org/wiki/Клюквенное_озеро'
    }
]

function initCarousels() {
    const total_array = [folk_crafts, famous_personalities, ecology_cards, reverence_cards, nature_cards]
    const element_carousel = document.querySelectorAll('.carousel_left_text, .carousel_right_text')

    element_carousel.forEach((item, index) => {
        new Carousel(item, total_array[index])
    })
}

// container_interesting_fact
function initInterestingFacts() {
    const placeholders = document.querySelectorAll('.container_interesting_fact');

    placeholders.forEach(placeholder => {
        placeholder.textContent = '';
        
        const heading = document.createElement('h5');
        heading.className = 'create_interesting_fact_h5';
        heading.textContent = 'Интересный факт:';
        placeholder.appendChild(heading);
        
        const text = document.createElement('p');
        text.className = 'interesting_fact_text';
        text.textContent = placeholder.dataset.text || '';
        placeholder.appendChild(text);
        
        const aside = document.createElement('aside');
        aside.className = 'aside_interesting_fact';
        
        const audioTrigger = document.createElement('p');
        audioTrigger.className = 'audio-trigger';
        audioTrigger.textContent = placeholder.dataset.audioText || 'Воспроизвести аудио';
        audioTrigger.style.cursor = 'pointer';
        audioTrigger.style.color = '#007bff';
        audioTrigger.style.transition = 'color 0.2s';
        
        const link = document.createElement('a');
        link.target = '_blank';
        link.href = placeholder.dataset.hrefLink1 || '#';
        link.textContent = 'Узнать больше';
        link.rel = 'noopener noreferrer';
        
        aside.appendChild(audioTrigger);
        aside.appendChild(link);
        placeholder.appendChild(aside);
        
        // Настройка аудио
        setupAudioForFact(placeholder, audioTrigger);
    });
}

function setupAudioForFact(placeholder, audioTrigger) {
    const audioSrc = placeholder.dataset.audioSrc;
    if (!audioSrc) return;
    
    const audio = document.createElement('audio');
    audio.src = audioSrc;
    audio.preload = 'metadata';
    
    let isPlaying = false;
    
    audioTrigger.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            audioTrigger.textContent = placeholder.dataset.audioText || 'Воспроизвести аудио';
        } else {
            audio.play().then(() => {
                isPlaying = true;
                audioTrigger.textContent = 'Остановить аудио';
            })
        }
    });
    
    audio.addEventListener('ended', () => {
        isPlaying = false;
        audioTrigger.style.color = '#007bff';
        audioTrigger.textContent = placeholder.dataset.audioText || 'Воспроизвести аудио';
    });
    
    placeholder.appendChild(audio);
}

// Инициализация всего кода после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Наблюдатели
    document.querySelectorAll('.container_traditions_card').forEach(card => {
        observer_one.observe(card)
    })
    
    document.querySelectorAll('.marking_cards_one, .marking_cards_two').forEach(card => {
        observer_two.observe(card)
    })
    
    // observer_three.observe(chart_element)

    // Рендеринг контента
    renderHistoryFeed()
    renderSolders()
    create_small_cards('.marking_cards_one', ecology_chapter)
    create_small_cards('.marking_cards_two', tourism_chapter)
    
    // Инициализация компонентов
    // initMilitaryMuseumGallery()
    fun_create_placeholder_beginning_chapter()
    // initCarousels()
    // initInterestingFacts()
})

// Настройки и фунуции для модального окна
const settings = document.getElementById('settings')
const module_bg = document.getElementById('module_bg')
const exit_btn = document.getElementById('exit_btn')
let rorate = 10

function rotate_settings(offset = '+') {
    if (offset == '+') {rorate += 180} else {rorate -= 180}
    settings.style.transform = `rotate(${rorate}deg)`
}
settings.addEventListener('click', () => {
    rotate_settings()
    setTimeout(() => {
        module_bg.classList.add('active')
    }, 100)
})
function remove_wodule_window() {
    module_bg.classList.remove('active')
    rotate_settings('-')
}

module_bg.addEventListener('click', (e) => {
    if (e.target === module_bg) {
        remove_wodule_window();
    }
})
exit_btn.addEventListener('click', () => {
    remove_wodule_window()
})

// Шапка сайта
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollThreshold = document.documentElement.clientHeight * 0.1;
    
    if (window.scrollY < scrollThreshold) {
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
});


// Выносим переменную для голосов в глобальную область
// let availableVoices = [];

// Функция инициализации голосов
// function initVoices() {
//     availableVoices = speechSynthesis.getVoices();
// }

// // Ждем загрузки голосов
// speechSynthesis.onvoiceschanged = initVoices;
// // Вызываем сразу на случай если голоса уже загружены
// initVoices();

// function safeSpeakText(text) {
//     // Всегда останавливаем предыдущую речь
//     speechSynthesis.cancel();
    
//     // Проверяем поддержку браузером
//     if (!('speechSynthesis' in window)) {
//         console.error('Браузер не поддерживает синтез речи');
//         return false;
//     }
    
//     // Проверяем загружены ли голоса
//     if (availableVoices.length === 0) {
//         console.warn('Голоса не загружены, пробуем перезагрузить...');
//         initVoices();
//         if (availableVoices.length === 0) {
//             console.error('Голоса недоступны');
//             return false;
//         }
//     }
    
//     const utterance = new SpeechSynthesisUtterance(text);
    
//     // Ищем русский голос
//     const russianVoice = availableVoices.find(voice => 
//         voice.lang.includes('ru') || voice.lang.includes('RU')
//     );
    
//     if (russianVoice) {
//         utterance.voice = russianVoice;
//         console.log('Используется голос:', russianVoice.name);
//     }
    
//     utterance.rate = 0.8;
//     utterance.pitch = 1;
//     utterance.volume = 1;
    
//     // Обработчики событий для отладки
//     utterance.onstart = () => console.log('Начало речи:', text);
//     utterance.onend = () => console.log('Конец речи');
//     utterance.onerror = (event) => console.error('Ошибка синтеза речи:', event.error);
    
//     try {
//         speechSynthesis.speak(utterance);
//         return true;
//     } catch (error) {
//         console.error('Ошибка при воспроизведении:', error);
//         return false;
//     }
// }


document.addEventListener('DOMContentLoaded', function() {
    const plus_btn = document.getElementById('plus_btn');
    const changeable_font_size = document.getElementById('changeable_font_size');
    const minus_btn = document.getElementById('minus_btn');
    const voice_assistant_select = document.getElementById('voice_assistant_select');
    const color_palette_select = document.getElementById('color_palette_select');
    

    const cookieData = getCookie('cookie_settings');
    const settings_JSON = cookieData ? JSON.parse(cookieData) : {
        font_size: 16,
        color: 'white',
        voice_assistant: false
    };

    function updateSetting(settingName, value) {
        settings_JSON[settingName] = value;
        setCookie('cookie_settings', JSON.stringify(settings_JSON), 3);
    }

    function updateFontSize(font_size) {
        settings_JSON['font_size'] = font_size;
        
        document.documentElement.style.fontSize = font_size + 'px';
        changeable_font_size.innerHTML = `<strong>${font_size}</strong>`
        
        setCookie('cookie_settings', JSON.stringify(settings_JSON), 3);
    }

    voice_assistant_select.addEventListener('change', () => {
        const newValue = voice_assistant_select.value;
        flage_voice = voice_assistant_select.value === 'Вкл';
        updateSetting('voice_assistant', newValue);
        
        if (flage_voice) {
            setTimeout(() => {
                safeSpeakText("Голосовой помощник включен");
            }, 100);
        }
    });

    color_palette_select.addEventListener('change', () => {
        updateSetting('color', color_palette_select.value);
        
        setTimeout(() => {
            location.reload();
        }, 1000)
    });

    plus_btn.addEventListener('click', () => {
        const currentSize = settings_JSON.font_size;
        if (currentSize < 20) {
            let new_size = currentSize + 1
            updateFontSize(new_size);

            if (flage_voice) {
                setTimeout(() => {
                    safeSpeakText(`Размер шрифта ${new_size} px`);
                }, 100);
            }
        } else if (flage_voice){
            setTimeout(() => {
                safeSpeakText(`Максимальный размер 21px`);
            }, 100);
        }
    });

    minus_btn.addEventListener('click', () => {
        const currentSize = settings_JSON.font_size;
        if (currentSize > 14) {
            let new_size = currentSize - 1
            updateFontSize(new_size);
            
            if (flage_voice) {
                setTimeout(() => {
                    safeSpeakText(`Размер шрифта ${new_size} px`);
                }, 100);
            }
        } else if (flage_voice){
            setTimeout(() => {
                safeSpeakText(`Минимальный размер 14px`);
            }, 100);
        }
    });

    updateFontSize(settings_JSON.font_size);

    
    voice_assistant_select.value = settings_JSON.voice_assistant;
    color_palette_select.value = settings_JSON.color;

    let flage_voice = voice_assistant_select.value === 'Вкл';
    console.log(flage_voice)

    update_theme(color_palette_select.value, flage_voice)
});

function update_theme(value, flage_voice) {
    const all_elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, li, td, th, caption, span')
    const body = document.querySelector('body')
    if (value === 'Темная') {
        body.style.backgroundColor = 'rgba(105, 105, 105, 1)'
        
        all_elements.forEach(el => {
            el.classList.add('darck_theme')
        })
    }else if (value === 'Упрощенная') {
        const all_img = document.querySelectorAll('.container_info_cards img, video, #container_iframe_map, .forest_conservation_project_div, .container_history_right_block img')
        const container_beginning_chapter_bottom_text = document.querySelectorAll('.container_beginning_chapter_bottom_text')
        const main_page = document.getElementById('main_page')
        const hidden_h = document.querySelectorAll('.hidden_h')
        const chart_container = document.querySelector('.chart-container')
        
        all_img.forEach(el => {
            el.classList.add('del_bg')
        })

        container_beginning_chapter_bottom_text.forEach(el => {
            el.classList.add('del_bg')
        })

        main_page.style.backgroundColor = 'rgba(105, 105, 105, 1)'

        hidden_h.forEach(el => {
            el.classList.add('del_bg')
        })
        chart_container.classList.add('del_bg')
    }

    if (flage_voice) {
        setTimeout(() => {
            safeSpeakText(toString(value));
        }, 100);
    }
}

// menu

document.addEventListener('click', (e) => {
    const input = document.querySelector('input');
    
    if (!e.target.closest('.burger_menu_elements_position')) {
        input.checked = false;
    }
});