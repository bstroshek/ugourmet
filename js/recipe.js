(function($) {
    $(document).ready(function(){


        //The same part of the code for products from  the Internal Page

        if ($(window).width() <= 580) {

            $('.ip-products').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        };



    });
})(jQuery);





