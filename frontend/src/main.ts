import "./style.scss";

interface ItemType {
  id: string;
  title: string;
  image: string;
  year: number;
  tags: string[];
  text: string;
  linkSite?: string;
  linkCode?: string;
}

const itemsOld = [
  {
    link: "https://plastic-windows.herokuapp.com",
    year: 2019,
    technologies: "Vue.js, Flask",
    layout: "переделанный дизайн шаблона, адаптивный, не особо кроссбраузерный",
    descriprtion: "Интернет-магазин пластиковых окон, который не закончен.",
    code: "https://github.com/Spanri/windows",
  },
  {
    link: "http://edms-mtuci.herokuapp.com",
    year: 2019,
    technologies: "Vue.js, Django (DRF)",
    layout: "свой дизайн, не адаптивный, не кроссбраузерный",
    descriprtion: `
      Диплом, система электронного документооборота. На сервере всё плохо, поэтому
      на фронте некоторые кнопки работают неправильно.</p>
      <p>Данные для входа (ломание на вашей совести!):<br>
      Логин: opachki9v@mail.ru<br>
      Пароль: CT8R3EAE`,
    code: "https://github.com/Spanri/CRM-diplom",
  },
  {
    link: "http://pstype.herokuapp.com",
    year: 2018,
    technologies: "Vue.js + Typescript, Node.js",
    layout: "свой дизайн, не адаптивный, не кроссбраузерный",
    descriprtion: `
      Сервер для мобильного приложения подруги для определения 
      психотипа водителя. Можно посмотреть панель администратора, 
      написанную на Vue.js.<br><br>То, что можно посмотреть, написано без TypeScript, а новая версия еще не доделана.</p>
      <p>Данные для входа (ломание на вашей совести!):<br>
      Логин: admin0<br>
      Пароль: hardpassword`,
    code: "https://github.com/Spanri/PS-type",
  },
];

const items: ItemType[] = [
  {
    id: "portfolio",
    title: "Портфолио",
    image: "",
    year: 2022,
    tags: ["Vite", "design"],
    text: "Придумала дизайн, заверстала, наполнила контентом.",
    linkSite: "https://spanri.github.io",
    linkCode: "https://github.com/Spanri/Spanri.github.io",
  },
  {
    id: "oohdesk",
    title: "Oohdesk DSP",
    image: "",
    year: 2022,
    tags: ["Vue", "Typescript", "Docker", "design"],
    text: "Проект на работе. Данные для входа дать не могу, можете посмотреть страницу входа))",
    linkSite: "https://dooh.oohdesk.ru",
  },
  {
    id: "test-payments",
    title: "Вёрстка платежей",
    image: "",
    year: 2019,
    tags: ["Vue"],
    text: "Тестовое задание по верстке.",
    linkSite: "https://infallible-swartz-576d6c.netlify.com",
    linkCode: "https://github.com/Spanri/card-payment-page",
  },
  {
    id: "bank-layout",
    title: "Вёрстка сайта банка",
    image: "",
    year: 2019,
    tags: ["Vue"],
    text: `
      Дизайн не мой. Дали макеты - заверстала.<br/>
      Вход и аутентификация пройдут при любых значениях (но минимальная валидация в регистрации все равно есть).
    `,
    linkSite: "https://spanri.gitlab.io/westb/",
  },
  {
    id: "bml",
    title: "Вёрстка рандомной информации",
    image: "",
    year: 2019,
    tags: ["Nuxt.js", "design"],
    text: "Рассказала, что такое модель движения по маршруту Бим-Миддлтон-Левин. Кажется, это нужно было для курсовой и мне показалось смешным заверстать инфу.",
    linkSite: "https://spanri.github.io/bml/",
    linkCode: "https://github.com/Spanri/bml",
  },
  {
    id: "about-my-friend",
    title: "О моём знакомом",
    image: "",
    year: 2019,
    tags: ["react", "design"],
    text: "Страничка о моём знакомом (там вёрстка).",
    linkSite: "https://spanri.github.io/react-landing/",
    linkCode: "https://github.com/Spanri/react-landing",
  },
  {
    id: "about-brother",
    title: "О моём брате",
    image: "",
    year: 2018,
    tags: ["vanilla", "design"],
    text: "Презентация, почему мой брат - неудачник (там вёрстка).",
    linkSite: "https://spanri.github.io/design/",
    linkCode: "https://github.com/Spanri/design",
  },
  {
    id: "my-pers",
    title: "О моих персонажах",
    image: "",
    year: 2017,
    tags: ["jquery", "design"],
    text: "Не доделано, но я считаю это милым, поэтому можете полюбоваться. Картинки сама рисовала.",
    linkSite: "https://spanri.github.io/first-site/www/pers/pers.html",
  },
  {
    id: "my-first-site",
    title: "Мой первый сайт",
    image: "",
    year: 2017,
    tags: ["jquery", "gulp", "design"],
    text: "Просто забавно, поэтому зацените.",
    linkSite: "https://spanri.github.io/first-site/www/index.html",
    linkCode: "https://github.com/Spanri/first-site",
  },
];

const getItem = (item: ItemType) => `
  <div class="item">
    <img class="item__image" src="${item.image}" />

    <div class="item__content">
      <h2 class="item__title">${item.title}</h2>

      <div class="item__header-description">
        <span class="item__year">${item.year} год</span>
        <span class="item__tags">${item.tags
          .map((tag) => "#" + tag)
          .join(" ")}</span>
      </div>

      <div class="item__text">${item.text}</div>

      <div class="item__link-site">Сайт: ${
        item.linkSite
          ? `<a href="${item.linkSite}">${item.linkSite}</a>`
          : '<span class="item__empty">Недоступно</span>'
      }</div>
      <div class="item__link-code">Код: ${
        item.linkCode
          ? `<a href="${item.linkCode}">${item.linkCode}</a>`
          : '<span class="item__empty">Недоступно</span>'
      }</div>
    </div>
  </div>
`;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="header">
    <p class="header__title">Программистское портфолио</p>
    <p class="header__description">Козлова Анна<br/>@spanri<br/>github.com/Spanri</p>
  </div>

  ${items.map(getItem).join("")}
`;
