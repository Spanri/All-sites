var granimInstance = new Granim({
  element: '#granim-canvas',
  name: 'granim',
  opacity: [1, 1,],
  states: {
    "default-state": {
      gradients: [
        ['#ffa2a2', '#fff9a2',],
        ['#4699c0', '#97c74b',],
      ],
    },
  },
});

var wrapper = document.getElementById("block-wrapper");
var items = [
  {
    link: 'https://spanri.gitlab.io/westb/',
    year: 2019,
    technologies: 'Vue.js',
    layout: 'дали макеты дизайна, адаптивный, кроссбраузерный (IE11+)',
    descriprtion: 'Сайт банка, только верстка. Вход и аутентификация пройдут при любых значениях (но минимальная валидация в регистрации все равно есть).<br><br>После входа/регистрации есть кнопки Онлайн-банк/Переводы, там прикольная анимация и еще в Переводах анимация переключения 1/2/3 неплохая! <br><br>Примечание: в гитлабе если обновить страницу не по корню, выдаст ошибку (то есть с vue-router не работает).',
  },
  {
    link: 'https://infallible-swartz-576d6c.netlify.com',
    year: 2019,
    technologies: 'Vue.js',
    layout: 'макет не мой, адаптивный, кроссбраузерный (IE11+)',
    descriprtion: 'Тестовое задание по верстке. (На нетлифай иногда страница не загружается, а через несколько минут загружается, как я поняла, оно выходит из сна)',
    code: 'https://github.com/Spanri/card-payment-page',
  },
  {
    link: 'https://spanri.github.io',
    year: 2019,
    technologies: 'нативный js, webpack',
    layout: 'свой дизайн, адаптивный, кроссбраузерный (IE11+)',
    descriprtion: 'Страничка, которую вы видите перед собой.',
    code: 'https://github.com/Spanri/Spanri.github.io',
  },
  {
    link: 'https://plastic-windows.herokuapp.com',
    year: 2019,
    technologies: 'Vue.js, Flask',
    layout: 'переделанный дизайн шаблона, адаптивный, не особо кроссбраузерный',
    descriprtion: 'Интернет-магазин пластиковых окон, который не закончен.',
    code: 'https://github.com/Spanri/windows',
  },
  {
    link: 'http://edms-mtuci.herokuapp.com',
    year: 2019,
    technologies: 'Vue.js, Django (DRF)',
    layout: 'свой дизайн, не адаптивный, не кроссбраузерный',
    descriprtion: `
      Диплом, система электронного документооборота. На сервере всё плохо, поэтому
      на фронте некоторые кнопки работают неправильно.</p>
      <p>Данные для входа (ломание на вашей совести!):<br>
      Логин: opachki9v@mail.ru<br>
      Пароль: CT8R3EAE`,
    code: 'https://github.com/Spanri/CRM-diplom',
  },
  {
    link: 'https://spanri.github.io/bml/',
    year: '2019 (идея из 2017)',
    technologies: 'Nuxt.js',
    layout: 'свой дизайн, адаптивный, кроссбраузерный (IE11+)',
    descriprtion: 'Просто страничка я сама не знаю о чём.',
    code: 'https://github.com/Spanri/bml',
  },
  {
    link: 'https://spanri.github.io/react-landing/',
    year: 2019,
    technologies: 'React',
    layout: 'свой дизайн, адаптивный, не особо кроссбраузерный',
    descriprtion: 'Страничка для друга.',
    code: 'https://github.com/Spanri/react-landing',
  },
  {
    link: 'https://spanri.github.io/design/',
    year: 2018,
    technologies: 'без фреймворков и сборщиков',
    layout: 'свой дизайн, адаптивный, не кроссбраузерный',
    descriprtion: 'Страничка о том, почему мой брат - неудачник, но там почти ничего нет.',
    code: 'https://github.com/Spanri/design',
  },
  {
    link: 'http://pstype.herokuapp.com',
    year: 2018,
    technologies: 'Vue.js + Typescript, Node.js',
    layout: 'свой дизайн, не адаптивный, не кроссбраузерный',
    descriprtion: `
      Сервер для мобильного приложения подруги для определения 
      психотипа водителя. Можно посмотреть панель администратора, 
      написанную на Vue.js.<br><br>То, что можно посмотреть, написано без TypeScript, а новая версия еще не доделана.</p>
      <p>Данные для входа (ломание на вашей совести!):<br>
      Логин: admin0<br>
      Пароль: hardpassword`,
    code: 'https://github.com/Spanri/PS-type',
  },
  {
    link: 'https://spanri.github.io/first-site/www/index.html',
    year: 2017,
    technologies: 'jquery, сборщик gulp',
    layout: 'свой дизайн, удивительно, но адаптивный, не кроссбраузерный',
    descriprtion: 'Самый первый мой сайт. Там всё плохо, но ностальгично.',
    code: 'https://github.com/Spanri/first-site',
  },
  {
    link: 'https://spanri.github.io/first-site/www/pers/pers.html',
    year: 2017,
    technologies: 'jquery, без сборщика',
    layout: 'свой дизайн, адаптивный, не кроссбраузерный',
    descriprtion: 'Страничка о моих персонажах (из рисования). Картинки для сайта так и не дорисовала.',
    code: 'https://github.com/Spanri/first-site',
  },
];

var html = '';

for(let i in items) {
  let codeLink = (
    
  `<div class="item__code-link-wrapper">
      <a class="item__code-link"
        href="${items[i].code}"
        target="_blank"
      >
        ${items[i].code}
      </a>
    </div>
  `)

  html += (
  `<div class="item">
    <div class="item__header">
      <div class="item__index">${+i + 1}</div>
      <div class="item__link-wrapper">
        <a class="item__link" href="${items[i].link}" target="_blank">
          ${items[i].link}
        </a>
      </div>
    </div>
    

    <div class="item__description">
      <div class="item__design-element">
        <div class="block">
          <span class="block__label">Год: </span>
          <span class="block__value">${items[i].year}</span>
        </div>
        <div class="block">
          <span class="block__label">Технологии: </span>
          <span class="block__value">${items[i].technologies}</span>
        </div>
        <div class="block">
          <span class="block__label">Верстка: </span>
          <span class="block__value">${items[i].layout}</span>
        </div>
      </div>

      <div class="block">
        <span class="block__label">Описание: </span>
        <span class="block__value">${items[i].descriprtion}</span>
      </div>
      <div class="block item__code">
        <span class="block__label">Код: </span>
        <span class="block__value">${items[i].code ? codeLink : 'недоступен'}</span>
      </div>
    </div>
  </div>`);
}

wrapper.innerHTML = html;