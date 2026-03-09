function imgPath(name) {
    return `${import.meta.env.BASE_URL}media/images/${name}`
}


// Articles
const regionBlocks = {
  'culture': `
    <section class="articles_about_region__block">
      <aside class="articles_about_region__image">
        <img src="${imgPath('region/culture.jpg')}" alt="Культура Курской области">
        <a target="_blank" href="">Культурный образ курской области</a>
      </aside>
      <aside class="articles_about_region__links">
        <ul class="simple_text">
          <li>✴ <a target="_blank" href="">Известный личности</a>: Александр Александрович Дейнека, Георгий Васильевич Свиридов, Святитель Иоасаф Белгородский, Преподобный Серафим Саровский.</li>
          <li>✴ <a target="_blank" href="">Основные направления культуры Курской области</a>: народные промыслы, учреждения культуры, фестивали, народная кухня, направления религии.</li>
          <li>✴ <a target="_blank" href="">Традиции Курской области</a>: календарные, аграрные, войсковые, кулинарный, культурные.</li>
          <li>✴ <a target="_blank" href="">Курский соловей</a>.</li>
        </ul>
      </aside>
    </section>
  `,

  'history': `
    <section class="articles_about_region__block">
      <aside class="articles_about_region__image">
        <img src="${imgPath('region/kurska_duga.jpg')}" alt="История Курской области">
        <a target="_blank" href="">История Курской области</a>
      </aside>
      <aside class="articles_about_region__links">
        <ul class="simple_text">
          <li>⭐ <a target="_blank" href="">Познакомтесь с историей региона с 1917 года по наши дни</a>.</li>
          <li>⭐ <a target="_blank" href="">Революция 1917 года</a>.</li>
          <li>⭐ <a target="_blank" href="">Современные музеи, посвященные СВО</a>.</li>
          <li>⭐ <a target="_blank" href="">Курская битва 1943 года</a>.</li>
          <li>⭐ <a target="_blank" href="">Последствия Чернобыльской катастрофы 1986 года</a>.</li>
          <li>⭐ <a target="_blank" href="">Курская АЭС-2</a>.</li>
          <li>⭐ <a target="_blank" href="">Герои нашего времени</a>.</li>
        </ul>
      </aside>
    </section>
  `,

  'ecology': `
    <section class="articles_about_region__block">
      <aside class="articles_about_region__image">
        <img src="${imgPath('region/ecology.jpg')}" alt="Экология Курской области">
        <a target="_blank" href="">Экология Курской области</a>
      </aside>
      <aside class="articles_about_region__links">
        <ul class="simple_text">
          <li>🌿 <a target="_blank" href="">Проблемы экологии Курской области и их решения</a>.</li>
          <li>🌿 <a target="_blank" href="">Центрально-Чернозёмный государственный природный биосферный заповедник имени профессора В. В. Алёхина</a>.</li>
          <li>🌿 <a target="_blank" href="">3 основные характеристики экологии Курской области: климат, гидрография и рельеф</a>.</li>
          <li>🌿 <a target="_blank" href="">Красная книга региона</a>.</li>
          <li>🌿 <a target="_blank" href="">Национальные проекты: "Сохранение лесов"</a>.</li>
        </ul>
      </aside>
    </section>
  `,

  'economy': `
    <section class="articles_about_region__block">
      <aside class="articles_about_region__image">
        <img src="${imgPath('region/economy.jpg')}" alt="Экономика Курской области">
        <a target="_blank" href="">Экономика Курской области</a>
      </aside>
      <aside class="articles_about_region__links">
        <ul class="simple_text">
          <li>💵 <a target="_blank" href="">Анализ ВРП региона</a>.</li>
          <li>💵 <a target="_blank" href="">Курская магнитная аномалия (КМА)</a>.</li>
          <li>💵 <a target="_blank" href="">Сравнительная таблица основных направлений ВРП Курской области</a>.</li>
        </ul>
      </aside>
    </section>
  `,

  'tourism': `
    <section class="articles_about_region__block">
      <aside class="articles_about_region__image">
        <img src="${imgPath('region/cathedral.jpg')}" alt="Туризм в Курской области">
        <a target="_blank" href="">Туризм Курской области</a>
      </aside>
      <aside class="articles_about_region__links">
        <ul class="simple_text">
          <li>🌍 <a target="_blank" href="pages/region/tourism.html">Инфраструктура туризма Курской области</a>.</li>
          <li>🌍 <a target="_blank" href="pages/region/tourism.html">Популярные достопримечательности и места: Усадьба А. А. Фета, Марьино (усадьба Барятинских), Центр общественной информации Курской АЭС</a>.</li>
          <li>🌍 <a target="_blank" href="pages/region/tourism.html">Уникальные природные объекты: Клюквенное озеро, Заказник «Гнилуша», Железногорский дендрологический парк, Гладиолусовые луга, Гора "Фагор"</a>.</li>
        </ul>
      </aside>
    </section>
  `,

  'cities': `
    <section class="articles_about_region__block">
      <aside class="articles_about_region__image">
        <img src="${imgPath('region/kursk_region_map.jpg')}" alt="Карта Курской области">
        <a target="_blank" href="">Города Курской области</a>
      </aside>
      <aside class="articles_about_region__links">
        <ul class="simple_text">
          <li>🏙️ <a target="_blank" href="">Курск</a> — областной центр и древний город (основан в 1032 году), знаменитый своей литературной историей («Слово о полку Игореве») и крупнейшей в России Курской магнитной аномалией.</li>
          <li>🏙️ <a target="_blank" href="">Курчатов</a> — самый молодой город области (основан в 1968 году) и город атомщиков, возникший как спутник Курской АЭС.</li>
          <li>🏙️ <a target="_blank" href="">Железногорск</a> — второй по величине город региона и центр горнодобывающей промышленности, где ведется добыча и обогащение железной руды (Михайловский ГОК).</li>
          <li>🏙️ <a target="_blank" href="">Льгов</a> — старинный город (известен с 1152 года) на берегу реки Сейм, тесно связанный с жизнью поэта Н.Н. Асеева и историей дворянского рода Барятинских.</li>
          <li>🏙️ <a target="_blank" href="">Суджа</a> — небольшой город с богатой историей (известен с XVII века), важный транзитный пункт для российского газа, поступающего в Европу через газоизмерительную станцию.</li>
        </ul>
      </aside>
    </section>
  `
}

export function create_articles(...articles){

    const container = document.getElementById('articles_about_region')

    if (!container) {
        console.error('Контейнер #articles_about_region не найден');
        return;
    }

    container.innerHTML = `
        <h2 class="title">Статьи о Курской области</h2>
    `

    articles.forEach(element => {
        container.innerHTML += regionBlocks[element]
    })

}