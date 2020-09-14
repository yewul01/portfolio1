(function($){

    $(window).scroll(function(){
        var sct = $(this).scrollTop()
        var comNear = $('company').offset().top - $(this).height()/2
        if (sct >= comNear) {
            $('.company .comul .comli').addClass('fadeInUp')
        } else {
            $('.company .comul .comli').removeClass('fadeInUp')
        }
    })


})(jQuery)