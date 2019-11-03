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
    layout: 'дали макеты дизайна, адаптивный, кроссбраузерный',
    descriprtion: 'Сайт банка, только верстка. Примечание: в гитлабе если обновить страницу не по корню, выдаст ошибку (то есть с vue-router не работает).',
  },
  {
    link: 'https://infallible-swartz-576d6c.netlify.com',
    year: 2019,
    technologies: 'Vue.js',
    layout: 'макет не мой, адаптивный, кроссбраузерный',
    descriprtion: 'Тестовое задание по верстке, пока что там сломано, я переделывала.',
    code: 'https://github.com/Spanri/card-payment-page',
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
    layout: 'свой дизайн, адаптивный, кроссбраузерный',
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
      написанную на Vue.js.</p>
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
  `<a class="item__description-a"
      href="${items[i].code}"
      target="_blank"
    >
      ${items[i].code}
    </a>
  `)
  html += (
  `<div class="item">
    <div class="item__design-element"></div>
    <p class="item__link">
      <a
        class="item__link-a"
        href="${items[i].link}" 
        target="_blank"
      >
        ${items[i].link}
      </a>
    </p>
    <div class="item__description">
      <p>Год: ${items[i].year}</p>
      <p>Технологии: ${items[i].technologies}</p>
      <p>Верстка: ${items[i].layout}</p>
      <p>Описание: ${items[i].descriprtion}</p>
      <p>Код: ${items[i].code ? codeLink : 'не доступен'}</p>
    </div>
  </div>`);
}

wrapper.innerHTML = html;