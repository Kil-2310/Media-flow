// Окно с информацией
const info_win_btn = document.getElementById('info_win_btn')
const info_win = document.getElementById('info_win') // Добавлено отсутствующее определение
info_win_btn.addEventListener('click', () => {
    info_win.style.display = 'none'
})

// Карта 2-ой страницы сайта
const container_iframe_map = document.getElementById('container_iframe_map')
const iframe_map = document.getElementById('iframe_map') // Вынесено за пределы обработчика

container_iframe_map.addEventListener('click', () => {
    iframe_map.style.pointerEvents = 'auto'
})

// Обработчик mouseout добавлен один раз
iframe_map.addEventListener('mouseout', () => {
    iframe_map.style.pointerEvents = 'none'
})

// Музыкальный плеер
const control_music_player = document.getElementById('control_music_player')
const music_player = document.getElementById('music_player')
const music_player_array = ['./music/background_music_1.mp3', './music/background_music_2.mp3']
let music_player_counter = 0

function start_music(music_element) {
    music_element.src = music_player_array[music_player_counter]
    music_element.play()
}

control_music_player.addEventListener('click', () => {
    if (music_player.paused) {
        start_music(music_player)
        control_music_player.textContent = '🔇'
    } else {
        music_player.pause()
        control_music_player.textContent = '♬'
    }
})

music_player.addEventListener('ended', () => {
    music_player_counter = (music_player_counter + 1) % music_player_array.length
    start_music(music_player)
})

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
    const placeholder = document.getElementById('placeholder_history_feed')
    let html_content = ''

    history_info.forEach((item, index) => {
        const reverse_class = index % 2 === 0 ? '' : 'reversed'
        const total_img = item.img ? `<img loading="lazy" src="${item.img}" class="container_history_right_block_img">` : ''
        const total_text = `<article class="container_history_left_block">${item.text}</article>`

        html_content += 
        `<h5 class="container_history_h5">${item.year}</h5>
        <aside class="container_history_markup ${reverse_class}">
            ${total_text}
            <article class="container_history_right_block">
                ${total_img}
            </article>
        </aside>`
    })

    placeholder.innerHTML = html_content
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
    let total_HTML = ''
    const placeholder = document.getElementById('solders')
    
    solders_info.forEach(item => {
        total_HTML += `
        <div class="solders_div">
            <a target="_blank" href="${item.link}">
                <img src="${item.image}" alt="Фото солдата ${item.name}">
            </a>
            <div>
                <pre>${item.name[0]}
    ${item.name[1]}</pre>
            </div>
        </div>
        `
    })
    placeholder.innerHTML = total_HTML
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
    const placeholder = document.querySelector(element)
    const total_html = array.map(item => `
        <div>
            <p><strong>${item.text}</strong></p>
        </div>
    `).join('')

    placeholder.innerHTML = total_html
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

function creating_chart() {
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
                        font: {
                            size: function(context) {
                                const width = context.chart.width
                                if (width < 400) return 16
                                if (width <= 600) return 19
                                return 22
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
    const placeholders = document.querySelectorAll('.placeholder-beginning-chapter')
    
    placeholders.forEach(placeholder => {
        const html_content = `
            <section class="container_beginning_chapter">
                <img loading="lazy" class="container_beginning_chapter_img" src="${placeholder.dataset.image}" alt="Изображение начала главы">
                <h3 class="container_beginning_chapter_title">${placeholder.dataset.leftBlock} Курской области</h3>
                <p class="container_beginning_chapter_bottom_text">${placeholder.dataset.rightBlock}</p>
            </section>
        `
        placeholder.outerHTML = html_content
    })
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
        this.container.innerHTML = `
            <img loading="lazy" class="info_card_img" src="${this.slides[this.currentSlide].image}" alt="${this.slides[this.currentSlide].title}">
            <section class="info_cards">
                <aside class="left_card_block">
                    <h5>${this.slides[this.currentSlide].title}</h5>
                    <p>${this.slides[this.currentSlide].text}</p>
                    <aside><a target="_blank" href="${this.slides[this.currentSlide].link}">Узнать больше</a></aside>
                </aside>
                <aside class="right_card_block">
                    <button class="prev-btn go_button">←</button>
                    <button class="next-btn go_button">→</button>
                </aside>
            </section>
            <div class="carousel-indicator"></div>
        `

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
        text: 'Дендропарк создавался на научной основе в соответствии с рекомендациями ученых-ботаников Брянской и Воронежской областей. Сегодня в парке собраны растения из разных уголков земного шара. На территории в три гектара высажены более 3500 редких растений. Для удобства парк разделен на 34 сектора.',
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
        text: 'Статус памятника природы регионального значения был официально утвержден в 2013 году. Особенностью озера является его плавучий остров, состоящий из растений. На территории водоёма обнаружено 187 видов сосудистых растений из них 11 включены в Красную книгу Курской области.',
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
    const placeholders = document.querySelectorAll('.container_interesting_fact')

    placeholders.forEach(placeholder => {
        placeholder.innerHTML = `
            <h5 class='create_interesting_fact_h5'>Интересный факт:</h5>
            <p class='interesting_fact_text'>${placeholder.dataset.text}</p>
            <aside class='aside_interesting_fact'>
            <p class="audio-trigger">${placeholder.dataset.audioText}</p>
            <a target="_blank" href="${placeholder.dataset.hrefLink1}">Узнать больше</a>
            </aside>
        `
        
        const interesting_fact_audio = document.createElement('audio')
        interesting_fact_audio.src = placeholder.dataset.audioSrc
        placeholder.append(interesting_fact_audio)

        const audio_trigger = placeholder.querySelector('.audio-trigger')
        audio_trigger.addEventListener('click', () => {
            if (interesting_fact_audio.paused) {
                interesting_fact_audio.play()
            } else {
                interesting_fact_audio.pause()
            }
        })
    })
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
    
    observer_three.observe(chart_element)

    // Рендеринг контента
    renderHistoryFeed()
    renderSolders()
    create_small_cards('.marking_cards_one', ecology_chapter)
    create_small_cards('.marking_cards_two', tourism_chapter)
    
    // Инициализация компонентов
    initMilitaryMuseumGallery()
    fun_create_placeholder_beginning_chapter()
    initCarousels()
    initInterestingFacts()
})