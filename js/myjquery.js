(function($){

    $(window).scroll(function (){
        var sct = $(this).scrollTop()
        var company = $('#section .company').offset().top
        var banner = $('#section .Quality_banner').offset().top
        var news = $('#section .news').offset().top
        var product = $('#section .product').offset().top

        if ( sct >= company ) {
            $('#section .company').addClass('on')
        } else {
            $('#section .company').removeClass('on')
        }

        if (sct >= banner ) {
            $('#section .Quality_banner').addClass('on')
        } else {
            $('#section .Quality_banner').removeClass('on')
        }

        if ( sct >= news ) {
            $('#section .news').addClass('on')
        } else {
            $('#section .news').removeClass('on')
        }

        if ( sct >= product ) {
            $('#section .product').addClass('on')
        } else {
            $('#section .product').removeClass('on')
        }
    })


})(jQuery)