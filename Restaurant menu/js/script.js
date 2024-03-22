let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let theme = document.querySelector('.switch');
let root = document.querySelector(':root');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

theme.onclick = () => {
  theme.classList.toggle('active');
  document.body.classList.toggle('active');
  root.classList.toggle('dark');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// inicio de los controladores de los carruseles
var swiper = new Swiper('.food-slider', {
  grabCursor: true,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      maxHeight: 20,
    },
    700: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 3,
    },
  },
});

// fin de carruseles
