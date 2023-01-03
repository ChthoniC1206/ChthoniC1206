const swipers = new Swiper(".mySwipers-weather", {
    slidesPerView: 6,
    slidesPerGroup: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints:{
        810: {
            spaceBetween: 3,
            slidesPerView: 3,
        },
        400: {
            spaceBetween: 1,
            slidesPerView: 1,
        },
        100: {
            spaceBetween: 1,
            slidesPerView: 1,
        },

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });