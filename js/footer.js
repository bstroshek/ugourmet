
(function($) {
    $(document).ready(function(){

        $('.footer-title').click(function() {
            $(this).toggleClass('show');
            $(this).siblings().slideToggle('slow');
        })

    });

})(jQuery);