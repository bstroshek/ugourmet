(function($) {
    $(document).ready(function(){

        // faq tabs
        $('.faq-tabgroup > div').hide();
        $('.faq-tabgroup > div:first-of-type').show();
        $('.faq-tabs a').click(function(e){
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#'+$this.parents('.faq-tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();

        });


        // faq accordion
        $('.toggle').click(function(e) {
            e.preventDefault();

            var $this = $(this);

            if ($this.next().hasClass('show')) {
                $this.removeClass('active');
                $this.next().removeClass('show');
                $this.next().slideUp(350);
            } else {

                $this.parent().parent().find('li a.toggle').removeClass('active');
                $this.addClass('active');
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find('li .inner').slideUp(350);
                $this.next().toggleClass('show');
                $this.next().slideToggle(350);
            }
        });


        if ($(window).width() <= 768) {

            $('.custom-oil-row .products').slick({
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

