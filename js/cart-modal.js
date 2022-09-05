(function($) {
    $(document).ready(function(){

        // Open Cart-modal

        $('.click-cart').click(function(e) {
            e.preventDefault();
            var $modal = $('#js-cart-modal');

            if ($modal.hasClass('show-modal')) {
                $modal.removeClass('show-modal');
                $modal.slideUp(350);
            } else {
                $modal.slideDown(350);
                $modal.toggleClass('show-modal');

            }
        });


    });
})(jQuery);
