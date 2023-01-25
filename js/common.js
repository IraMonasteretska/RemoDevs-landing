$(document).ready(function () {

    // partners - slider
    $('.partners-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2500,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    speed: 4000,
                }
            },
        ]
    });

    $('.partners-slider a').click(function (e) {
        e.preventDefault();
    });

    // header - add shadow
    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $('header.header').addClass('header__shadow');
        } else {
            $('header.header').removeClass('header__shadow');
        }
    });

    // menu mobile
    if ($(window).width() < 992) {
        $('.submenu').click(function () {
            $(this).find('ul').slideToggle();
        });
    }

    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.mobilemenu-wrapper').toggleClass('open');
    });

    // init select style
    if ($('select, input[type="checkbox"]').length > 0) {
        $(function () {
            $('select, input[type="checkbox"]').styler();
        });
    }


    $(".anchorbtn").on("click", function (event) {
        var headerHeight = 93;
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 40;
        $('body,html').animate({
            scrollTop: top - headerHeight
        }, 1000);
    });

    // checked form

    $('#formCheck').on('change', function() {
        if ($(this).is(':checked')) {
            $('.form__btn').attr('disabled', false);
        } else {
            $('.form__btn').attr('disabled', true);
        }
    });


});