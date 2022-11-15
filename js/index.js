window.addEventListener('DOMContentLoaded', function () {

  // Const  

    const arrowPrev = document.querySelector('#swiper__arrow-prev');
    const arrowNext = document.querySelector('#swiper__arrow-next');
    const jobLink = document.querySelector('#job__link');

  // Career.html - Button See More

  if (jobLink) {
    jobLink.addEventListener('click', function() {
      document.querySelector('#more').classList.remove('job__hidden')
      document.querySelector('#job__button').classList.add('job__hidden')
    })
  }    

  // Burger Menu

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  // Swiper Arrow

  if (arrowPrev) {
    arrowPrev.addEventListener('click', function() {
      arrowNext.classList.add('swiper__arrow-opacity')
      arrowPrev.classList.remove('swiper__arrow-opacity')
    })
  }

  if (arrowNext) {
    arrowNext.addEventListener('click', function() {
      arrowPrev.classList.add('swiper__arrow-opacity')
      arrowNext.classList.remove('swiper__arrow-opacity')
    })
  }

  // Swiper

  if (window.Swiper) {
    initSwiper();
  }
})

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    loop: true, 

    // Navigation arrows
    
    navigation: {
      nextEl: '.swiper__arrow-next',
      prevEl: '.swiper__arrow-prev',
    },

    keyboard: {
      enabled: true,
    },

    autoHeight: true,

    slidesPerView: 4,

    breakpoints: {
      240: {
        slidesPerView: 0.8,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },      
      480: {
        slidesPerView: 1.6,
        spaceBetween: 20
      },    
      768: {
        slidesPerView: 2.8,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3.4,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }

  });
}

