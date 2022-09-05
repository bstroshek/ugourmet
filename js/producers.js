(function($) {
    $(document).ready(function(){

        // Images description activate
        $('.js-producers-image').on('click', function (e) {
            e.preventDefault();
            $('.js-producers-image').removeClass('active');
            $(this).toggleClass('active');
        });


        $('.js-producers-image').hover(
            function () {
                $('.js-producers-image').removeClass('active');
            },
            function () {
                $(this).toggleClass('active');
            }
        );

        $('.js-producers-bottom-image').on('click', function (e) {
            e.preventDefault();
            $('.js-producers-bottom-image').removeClass('active');
            $(this).toggleClass('active');
        });

        $('.js-producers-bottom-image').hover(
            function () {
                $('.js-producers-bottom-image').removeClass('active');
            },
            function () {
                $(this).toggleClass('active');
            }
        );


    });
})(jQuery);

