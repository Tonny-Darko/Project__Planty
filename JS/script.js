const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() || 
            isMobile.BlackBerry() || 
            isMobile.iOS() || 
            isMobile.Opera() || 
            isMobile.Windows()); 
        
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
};

/*---------  SLIDER    --------------*/
new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autHeight: true,
    watchOverflow: true,
    loop: true,
    spaceBetween: 28,
    breakpoints: {
        789: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 4000,
      },
      speed: 800,

});
new Swiper('.image-slider__author', {
    autHeight: true,
    watchOverflow: true,
    loop: true,
    // spaceBetween: 28,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
      },
    speed: 800,
    effect: 'flip',
    flipEffect: {
        slideShadows: true,
        limitRotation: true 
    },
});