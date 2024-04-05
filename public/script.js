// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal", // 投影片的方向為水平方向
  loop: false, // 不使用循環播放
  allowTouchMove: false, // 不要拖曳投影片
  // If we need pagination
  pagination: {
    el: ".swiper-pagination", // 分頁圓點容器的CSS選擇器
    clickable: true, // 分頁圓點可以點選後，直接移至該頁
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }, // 分頁原點渲染樣式回呼函式，讓圓點上呈現頁面數字
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next-btn", // 下一頁客製化圓點的CSS選擇器
    prevEl: ".prev-btn", // 上一頁客製化圓點的CSS選擇器
  },
});
