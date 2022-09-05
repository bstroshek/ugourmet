(function($) {
    $(document).ready(function(){


        $(".home-reviews").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: ".prev-arrow",
            nextArrow: ".next-arrow",
            asNavFor: '.slider-nav-press',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0',
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.slider-nav-press').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.home-reviews',
            dots: true,
            infinite: true,
            centerPadding: '0',
            arrows: false,
            centerMode: true,
            focusOnSelect: true
        });

        $(".recipes-col.right").scrollTop(200);


        $('.recipes-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            centerPadding: '0',
            arrows: false,
            centerMode: true
        });



        $('.rec__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });







    });
})(jQuery);

setTimeout(function() {
    $('body').addClass('loaded');
}, 2000);


