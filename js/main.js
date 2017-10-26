$(document).ready(function () {

    /* TOP Menu Stick  */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('#sticky-header').addClass("sticky");
        } else {
            $('#sticky-header').removeClass("sticky");
        }
    });

    //Owl Carousel

    $('.slider-active').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 2000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"><i>', '<i class="fa fa-angle-right"><i>'],
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

//Testimonial Slider

$(document).ready(function () {

    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

});
