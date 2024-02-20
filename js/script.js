// document.addEventListener('DOMContentLoaded', () => {
//     const width = window.innerWidth;
//     if (width < 768){
//       const swiper = new Swiper('.swiper', {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: true,
      
//         // If we need pagination
//         pagination: {
//           el: '.swiper-pagination',
//         },
    
//         centeredSlides: true,
    
//         slidesPerView: 1.1
//       });
//     }
//   })

const initSlider = function () {
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
      centeredSlides: true,
  
      slidesPerView: 1.1
  });
}

const showMore = document.querySelector('.slider-menu__show-more');
const sliderMenu = document.querySelector('.slider-menu__links')
const showMoreIcon = document.querySelector('.slider-menu__more-icon')

showMore.addEventListener('click', function() {
  sliderMenu.classList.toggle('hide_menu');
  if (sliderMenu.classList.contains('hide_menu')) {
    showMore.textContent = 'Показать все';
    showMoreIcon.style.transform = "rotate(0deg)";
  } else {
    showMore.textContent = 'Скрыть';
    showMoreIcon.style.transform = "rotate(180deg)"
  }
});

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  initSlider();
  
}
