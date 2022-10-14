import "./style.scss";
import imgPortfolio from "./images/portfolio.png";
import imgOohdesk from "./images/oohdesk.png";
import imgEdmsNew from "./images/edms-new.png";
import imgFfmpeg from "./images/ffmpeg.png";
import imgCustomMap from "./images/custom-map.png";
import imgFuzzyLogic from "./images/fuzzy-logic.png";
import imgBml from "./images/bml.png";
import imgEdms from "./images/edms.png";
import imgPayments from "./images/payments.png";
import imgWestBank from "./images/west-bank.png";
import imgAboutMyFriend from "./images/about-my-friend.png";
import imgAboutMyBrother from "./images/about-my-brother.png";
import imgAboutMyPers from "./images/about-my-pers.png";
import imgMyFirstSite from "./images/my-first-site.png";

interface ItemType {
  id: string;
  title: string;
  image: string | null;
  year: number;
  tags: string[];
  text: string;
  linkSite?: string;
  linkCode?: string;
}

const itemsOld = [
  {
    code: "https://github.com/Spanri/drawanri/tree/main",
  },
  {
    code: "https://github.com/Spanri/custom-map",
  },
  {
    code: "https://github.com/Dust-Games/frontend",
  },
  {
    link: "https://plastic-windows.herokuapp.com",
    year: 2019,
    technologies: "Vue.js, Flask",
    layout: "переделанный дизайн шаблона, адаптивный, не особо кроссбраузерный",
    descriprtion: "Интернет-магазин пластиковых окон, который не закончен.",
    code: "https://github.com/Spanri/windows",
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
    image: imgPortfolio,
    year: 2022,
    tags: ["Vite", "design"],
    text: "Придумала дизайн, заверстала, наполнила контентом.",
    linkSite: "https://spanri.github.io",
    linkCode: "https://github.com/Spanri/Spanri.github.io",
  },
  {
    id: "oohdesk",
    title: "Oohdesk DSP",
    image: imgOohdesk,
    year: 2022,
    tags: ["Vue", "Typescript", "Docker", "design"],
    text: "Проект на работе. Данные для входа дать не могу, можете посмотреть страницу входа))",
    linkSite: "https://dooh.oohdesk.ru",
  },
  {
    id: "edms2",
    title: "Система электронного документооборота | версия 2",
    image: imgEdmsNew,
    year: 2021,
    tags: ["Vue", "design"],
    text: "Где-то ниже - версия 1.<br/>Данная версия - переделанный вариант, но меня хватило только на верстку окна аутентификации.",
    linkSite: "https://edsm-anina.netlify.app/",
    linkCode: "https://github.com/Spanri/edsm-v2",
  },
  {
    id: "ffmpeg",
    title: "Image2Video",
    image: imgFfmpeg,
    year: 2020,
    tags: ["React", "ffmpeg", "design"],
    text: "Конвертор из картинки в видео. Работает очень медленно, потому что иначе ffmpeg без бэка не умеет.",
    linkSite: "https://spanri.github.io/ffmpeg-react/",
    linkCode: "https://github.com/Spanri/ffmpeg-react",
  },
  {
    id: "custom-map",
    title: "Кастомная карта",
    image: imgCustomMap,
    year: 2020,
    tags: ["typescript", "rollup"],
    text: "Кастомная карта с возможностью добавления своего сета тайлов. Хотела повторить гугл-карты))<br/>Карту можно двигать (таскать) и увеличивать на 1 пункт масштаба.",
    linkSite: "https://spanri.github.io/custom-map/",
    linkCode: "https://github.com/Spanri/custom-map",
  },
  {
    id: "fuzzy-logic",
    title: "Проект по нечеткой логике",
    image: imgFuzzyLogic,
    year: 2019,
    tags: ["Vue"],
    text: "Выбор стола. Вводится высота стола, ширина, материал и количество места для протягивания ног. Выводится, стоит ли сидеть за таким столом.",
    linkSite: "https://spanri.github.io/find-table/",
    linkCode: "https://github.com/Spanri/find-table",
  },
  {
    id: "edms",
    title: "Система электронного документооборота | версия 1",
    image: imgEdms,
    year: 2019,
    tags: ["Vue", "Django (DRF)", "design"],
    text: `
      Диплом. На сервере всё плохо (бд была на флешке в роутере, но я ее отключила).<br/>
      Логин: <strong>opachki9v@mail.ru<br></strong>
      Пароль: <strong>CT8R3EAE</strong>
    `,
    linkSite: "http://edms-mtuci.herokuapp.com",
    linkCode: "https://github.com/Spanri/edsm-v1",
  },
  {
    id: "test-payments",
    title: "Вёрстка платежей",
    image: imgPayments,
    year: 2019,
    tags: ["Vue"],
    text: "Тестовое задание по верстке.",
    linkSite: "https://card-payment-page.netlify.app/",
    linkCode: "https://github.com/Spanri/card-payment-page",
  },
  {
    id: "bank-layout",
    title: "Вёрстка сайта банка",
    image: imgWestBank,
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
    image: imgBml,
    year: 2019,
    tags: ["Nuxt.js", "design"],
    text: "Рассказала, что такое модель движения по маршруту Бим-Миддлтон-Левин. Кажется, это нужно было для курсовой и мне показалось смешным заверстать инфу.",
    linkSite: "https://spanri.github.io/bml/",
    linkCode: "https://github.com/Spanri/bml",
  },
  {
    id: "about-my-friend",
    title: "О моём знакомом",
    image: imgAboutMyFriend,
    year: 2019,
    tags: ["react", "design"],
    text: "Страничка о моём знакомом (там вёрстка).",
    linkSite: "https://spanri.github.io/react-landing/",
    linkCode: "https://github.com/Spanri/react-landing",
  },
  {
    id: "about-brother",
    title: "О моём брате",
    image: imgAboutMyBrother,
    year: 2018,
    tags: ["vanilla", "design"],
    text: "Презентация, почему мой брат - неудачник (там вёрстка).",
    linkSite: "https://spanri.github.io/design/",
    linkCode: "https://github.com/Spanri/design",
  },
  {
    id: "my-pers",
    title: "О моих персонажах",
    image: imgAboutMyPers,
    year: 2017,
    tags: ["jquery", "design"],
    text: "Не доделано, но я считаю это милым, поэтому можете полюбоваться. Картинки сама рисовала.",
    linkSite: "https://spanri.github.io/first-site/www/pers/pers.html",
  },
  {
    id: "my-first-site",
    title: "Мой первый сайт",
    image: imgMyFirstSite,
    year: 2017,
    tags: ["jquery", "gulp", "design"],
    text: "Просто забавно, поэтому зацените.",
    linkSite: "https://spanri.github.io/first-site/www/index.html",
    linkCode: "https://github.com/Spanri/first-site",
  },
];

const getItem = (item: ItemType) => `
  <div class="item">
    <div class="item__image-wrapper">
      ${
        item.image
          ? `<img class="item__image" src="${item.image}" />`
          : `<span>Лень скринить</span>`
      }
    </div>

    <div class="item__content">
      <h2 class="item__title">${item.title}</h2>

      <div class="item__header-description">
        <span class="item__year">${item.year} год</span>
        <span class="item__tags">${item.tags
          .map((tag) => `<span class="item__tags-item">#${tag}</span>`)
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

/**
 * Определяем основной блок html
 */

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="header">
    <p class="header__title">Программистское портфолио</p>
    <p class="header__description">Козлова Анна<br/>@spanri<br/>github.com/Spanri</p>
  </div>

  ${items.map(getItem).join("")}

  <div id="_big-image-wrapper">
    <img id="_big-image" />
  </div>
`;

/**
 * Навешиваем слушатели
 */

const itemElements: any = document.getElementsByClassName("item");
const itemElementsArray = [...itemElements];

const bigImageWrapperElement = document.getElementById(
  "_big-image-wrapper"
)! as HTMLImageElement;
const bigImageElement = document.getElementById(
  "_big-image"
)! as HTMLImageElement;

const clearBigImageWrapperElement = () => {
  bigImageElement.src = "";
  bigImageWrapperElement.style.display = "none";
};

bigImageWrapperElement.addEventListener("click", () => {
  clearBigImageWrapperElement();
});

clearBigImageWrapperElement();

itemElementsArray.forEach((itemElement) => {
  const imageElements = itemElement.getElementsByClassName("item__image");
  const imageElement = imageElements[0];

  if (imageElement) {
    imageElement.addEventListener("click", () => {
      bigImageElement.src = imageElement.src;
      bigImageWrapperElement.style.display = "flex";
    });
  }
});
