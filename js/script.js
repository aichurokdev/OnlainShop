const swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    // direction: 'vertical',
    slidesPerView:  1.1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: true,
    keyboard: true,
});

const slider = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    //
    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});