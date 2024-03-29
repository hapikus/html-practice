services = {
  "corporate-communications": {
    title: "Корпоративные коммуникации",
    text: `Корпоративные коммуникации являются важной частью успешного функционирования любого бизнеса, и для их эффективной организации необходимо использовать соответствующее оборудование.
          Системы телефонной связи могут включать в себя как обычные стационарные телефоны, так и более продвинутые VoIP-решения, позволяющие осуществлять звонки через Интернет.
          Дополнительно можно использовать программные решения для обмена сообщениями и совместной работы над документами, такие как Slack, Microsoft Teams или Google Workspace.`,
  },
  "server-equipment": {
    title: "Серверное оборудование",
    text: `Серверное оборудование является необходимым компонентом для создания высокопроизводительных компьютерных систем, обеспечивающих централизованное хранение и обработку данных.
          Конфигурация серверного оборудования может варьироваться в зависимости от конкретных требований, включая процессоры, память, хранилища данных, сетевые интерфейсы и другие параметры.
          Некоторые из наиболее распространенных типов серверного оборудования включают в себя серверы баз данных, файловые серверы, веб-серверы, приложенчные серверы и вычислительные серверы для научных и инженерных вычислений.`,
  },
  "office-equipment": {
    title: `Оргтехника`,
    text: `Оргтехника является неотъемлемой частью любого офиса, облегчая выполнение повседневных задач и увеличивая производительность работников.
          К типичной оргтехнике относятся принтеры, сканеры, копировальные аппараты, факсы, регистраторы и другие устройства, позволяющие организовать бумажную документацию и электронную почту.
          Современная оргтехника часто оснащена средствами автоматизации, такими как автоматическая двусторонняя печать, автоматическое подача документов для сканирования и автоматическая сортировка бумаги, что снижает нагрузку на персонал и повышает эффективность работы.`,
  },
  "audio-video-equipment": {
    title: `Аудио-Видео оборудование`,
    text: `Аудио-видео оборудование используется для захвата, обработки, передачи и воспроизведения звуков и изображений в различных контекстах, от домашних кинотеатров до конференц-залов и студий.
          Типичное аудио-видео оборудование включает в себя телевизоры, проекторы, динамики, микрофоны, камеры, микшеры звука и видео, а также различное программное обеспечение для обработки и редактирования мультимедийных файлов.
          Некоторые из наиболее современных и продвинутых решений включают в себя системы домашнего кинотеатра с технологией 4K и HDR, профессиональные видеокамеры для съемки кино и телевизионных программ, а также системы видеоконференций с высокой четкостью изображения и качеством звука.`,
  },
  "security-equipment": {
    title: `Безопасность`,
    text: `Оборудование и ПО для компьютерной безопасности предназначены для защиты компьютерных систем и данных от угроз, таких как вирусы, взломы, кражи личных данных и других видов кибератак.
          К типичному оборудованию и ПО для компьютерной безопасности относятся антивирусные программы, межсетевые экраны, системы обнаружения вторжений, шифровальное ПО, программы для аудита безопасности и многое другое.
          Современные решения включают в себя облачные системы безопасности, аналитику больших данных для обнаружения угроз, биометрические системы и механизмы контроля доступа, а также программное обеспечение для мониторинга безопасности на мобильных устройствах.`,
  },
  software: {
    title: `Программное обеспечение`,
    text: `Современное программное обеспечение представляет собой сложные и высокоинтегрированные системы, обеспечивающие функциональность и удобство использования для конечного пользователя.
          Современные программные продукты обычно основаны на модульной архитектуре и включают в себя широкий спектр функций, от инструментов для разработки приложений до систем управления базами данных и программ для анализа больших объемов данных.
          Современное программное обеспечение обычно имеет широкую поддержку, включая обновления, патчи и техническую поддержку, а также доступно в различных вариантах, от открытых исходных кодов до коммерческих продуктов с лицензионной поддержкой.`,
  },
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document
  .querySelectorAll(
    "div.services-containter__item, p.services-containter__item-text, img.services-containter__item-icon"
  )
  .forEach((elem) => {
    elem.addEventListener("click", serviceText);
  });

function serviceText(e) {
  document.querySelectorAll("div.services-containter__item").forEach((elem) => {
    if (elem.id === e.target.id) {
      elem.classList.add("services-containter__active");
    } else {
      elem.classList.remove("services-containter__active");
    }
  });

  let servTitle = document.getElementById("services-containter__text-title");
  servTitle.innerText = services[e.target.id]["title"];

  let servText = document.getElementById("services-containter__text-desc");
  servText.innerText = services[e.target.id]["text"];
}

// Burger menu
const burgerElement = document.querySelector(".burger");
const menu = document.querySelector(".nav-list");
const menuItem = document
  .querySelectorAll("li.nav-list__item")
  .forEach((elem) => {
    elem.addEventListener("click", (e) => {
      console.log(e);
      menu.classList.remove("nav-list_active");
    });
  });

burgerElement.addEventListener("click", () => {
  menu.classList.add("nav-list_active");
});

const closeElement = document.querySelector(".nav-list__close");

closeElement.addEventListener("click", () => {
  menu.classList.remove("nav-list_active");
});

/* Call-back button */

const callBackButton = document.getElementById("form__button-send");
callBackButton.addEventListener("click", () => {
  formElements = document
    .querySelectorAll(
      "input.form__name-input, input.form__email-input, input.form__phone-input, input.form__msg-input"
    )
    .forEach((elem) => {
      elem.value = '';
    });
});
