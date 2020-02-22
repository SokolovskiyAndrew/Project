$(function () {

    $('.slick', '.vertical-slider').slick({
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity: true,
        dots: true,
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
    });

});

$(function () {

    $('.multiple-items').slick({

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 1039,
                settings: {
                    arrows: false,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 699,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
    // $('.center').slick({
    //     centerMode: true,
    //     centerPadding: '0px',
    //     slidesToShow: 3,
    //     prevArrow: '.arrow_prev',
    //     nextArrow: '.arrow_next',
    //     responsive: [{
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '0px',
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
});

$(function () {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            998: {
                slidesPerView: 3,
                spaceBetween: 30
            },

        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }

    });
});