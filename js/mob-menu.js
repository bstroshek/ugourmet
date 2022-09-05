
(function($) {
    $(document).ready(function(){

        // Mobile menu open
        $('.js-hamburger').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.next().toggleClass('show').slideToggle('slow');
            $this.toggleClass('close');

        });


        // Mobile menu accordion
        // $('.toggle').click(function(e) {
        //     e.preventDefault();
        //
        //     var $this = $(this);
        //
        //     if ($this.next().hasClass('show')) {
        //         $this.next().removeClass('show');
        //         $this.next().slideUp(350);
        //         $this.parent().parent().find('li.mobile-nav-accordion-item').removeClass('active');
        //     } else {
        //         $this.parent().parent().find('li .inner').removeClass('show');
        //         $this.parent().parent().find('li .inner').slideUp(350);
        //         $this.next().toggleClass('show');
        //         $this.next().slideToggle(350);
        //         $this.parent().toggleClass('active');
        //
        //     }
        // });




    });

})(jQuery);