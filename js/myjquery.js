(function($){

    $(window).scroll(function() {
        var sct = $(this).scrollTop()
        var comNear = $('.company').offset().top - $(this).height()/2
        if (sct >= comNear) {
            $('.company .comul .comli').addClass('fadeInUp')
            for (var i=0; i<$('.comul .comli').length; i++) {
                $('.comul .comli').eq(i).css({
                    animationDelay:i*0.3 + 's'
                }).addClass('fadeInUp')
            }
        } else { $('.company .comul .comli').removeClass('fadeInUp') }
    })


})(jQuery)