import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 10,
  // initialSlide: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    // dynamicMainBullets: 3,
  },

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },

  autoplay: {
    // delay: 3000,
    disableOnInteraction: false, //false使用者滑動後會恢復自動播放
    pauseOnMouseEnter: true, //滑鼠進入自動播放暫停
  },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 60,
    slideShadows: false,
  },
});

const swiper2 = new Swiper(".swiperList", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 1000,
  slidesPerView: 5,
  spaceBetween: 10,
  // initialSlide: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },

  autoplay: {
    delay: 0,
    disableOnInteraction: false, //false使用者滑動後會恢復自動播放
    pauseOnMouseEnter: true, //滑鼠進入自動播放暫停
  },

  // effect: "coverflow",
  // coverflowEffect: {
  //   rotate: 60,
  //   slideShadows: false,
  // },
});

const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  scrollY !== 0
    ? nav.classList.remove("navOntop") &
      nav.classList.add("bg-secondary-subtle")
    : nav.classList.add("navOntop") &
      nav.classList.remove("bg-secondary-subtle");
});

//測試Funciton
const stopBtn = document.querySelector(".stop");
stopBtn.addEventListener("click", () => {
  swiper.autoplay.stop();
});
