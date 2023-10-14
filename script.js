const burgerBtn = document.querySelector(".burbtn");
const burgerMenu = document.querySelector(".burger__menu");
const lockBody = document.querySelector(".body-page");
burgerBtn.addEventListener("click", () => {
  console.log(11111);
  burgerMenu.classList.toggle("burger__menu_open");
  lockBody.classList.toggle("lock");
});
//функция переключения табов
const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.add(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};
// /*табы / секция Наши реализованные проекты*/
makeCodeUniversal(".burger__title", ".burger__links-item");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.7,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 2.7,
      spaceBetween: 10,
    },
  },
});
var swiper2 = new Swiper(".team__slider", {
  slidesPerView: 2.5,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
  },
});
var swiper3 = new Swiper(".feedback__slider", {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper4 = new Swiper(".situation__slider", {
  slidesPerView: 3.2,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    376: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
  },
});
var swiper5 = new Swiper(".lawyer__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    376: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    770: {
      slidesPerView: 1.2,
      spaceBetween: 32,
    },
  },
});
var swiper6 = new Swiper(".services__slider-1", {
  slidesPerView: 2.5,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    376: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    770: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
});
var swiper7 = new Swiper(".services__slider-2", {
  slidesPerView: 2.5,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    769: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
  },
});
