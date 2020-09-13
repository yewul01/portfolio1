(function($){

    $(window).scroll(function(){
        var sct = $(this).scrollTop()
        var company = $('.company').offset().top
        var banner = $('.company ul li').offset().top
        var news = $('.Quality_banner').offset().top
        var newsBtn = $('.news').offset().top
        var product = $('.news').offset().top

        if ( sct >= company ) {
            $('.company').addClass('on')
        }

        if (sct >= banner ) {
            $('.Quality_text').addClass('on')
        } 

        if ( sct >= news ) {
            $('.news_intr').addClass('on')
        }
        if ( sct >= newsBtn ) {
            $('.news .button').addClass('on')
        } 

        if ( sct >= product ) {
            $('.prod_intr').addClass('on')
        } 
    })


})(jQuery)