import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

document.getElementById("searchBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const searchBox = document.getElementById("searchBox");
  if (searchBox.style.display === "none") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
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

const swiperUpcpmingMovie = new Swiper(".swiperList", {
  loop: true,
  speed: 600,
  slidesPerView: 6,
  spaceBetween: 10,

  controller: {
    inverse: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  freeMode: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },

  autoplay: {
    disableOnInteraction: false, //false使用者滑動後會恢復自動播放
    pauseOnMouseEnter: true, //滑鼠進入自動播放暫停
  },
  // effect: "coverflow",
});

const images = document.querySelectorAll(".movieListImg");
const intro = document.querySelectorAll(".intro");
let timer;

images.forEach((img, index) => {
  img.addEventListener("mouseenter", () => {
    timer = setTimeout(() => {
      intro[index].style.display = "inline-block";
      img.classList.add("animation");
      // img.style.display = "none";
    }, 600);
  });

  img.addEventListener("mouseleave", () => {
    clearTimeout(timer);
  });
});

intro.forEach((intro, index) => {
  intro.addEventListener("mouseleave", () => {
    intro.style.display = "none";
    // images[index].style.display = "block";
  });
});

const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  scrollY !== 0
    ? nav.classList.remove("navOntop") &
      nav.classList.add("bg-secondary-subtle", "changeColor")
    : nav.classList.add("navOntop") &
      nav.classList.remove("bg-secondary-subtle", "changeColor");
});
