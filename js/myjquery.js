(function($){

    $(window).scroll(function (){
        var sct = $(this).scrollTop()
        var company = $('.company').offset().top
        var banner = $('.Quality_banner').offset().top
        var news = $('.news').offset().top
        var product = $('.product').offset().top

        if ( sct >= company ) {
            $('.company').addClass('on')
        } else {
            $('.company').removeClass('on')
        }
    })


})(jQuery)