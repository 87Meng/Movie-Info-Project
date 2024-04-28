import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

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

const images = document.querySelectorAll(".nowPlayingImg");
console.log(images);
const intro = document.querySelectorAll(".intro");

images.forEach((img, index) => {
  img.addEventListener("mouseover", (e) => {
    setTimeout(() => {
      intro[index].style.display = "block";
      intro[index].classList.add("animation");
    }, 1000); // 延遲 1000 毫秒（即 1 秒）執行行動代碼

    console.log(e);
  });
});

intro.forEach((intro) => {
  intro.addEventListener("mouseout", (e) => {
    intro.style.display = "none";
  });
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
