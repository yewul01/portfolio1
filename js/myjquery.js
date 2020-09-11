(function($){

    $(window).scroll(function(){
        var sct = $(this).scrollTop()
        var company = $('#section .company').offset().top
        var banner = $('#section .Quality_banner').offset().top
        var news = $('#section .news').offset().top
        var product = $('#section .product').offset().top

        if ( sct >= company ) {
            $('#section .company').addClass('on')
        } 

        if (sct >= banner ) {
            $('#section .Quality_banner').addClass('on')
        } 

        if ( sct >= news ) {
            $('#section .news').addClass('on')
        } 

        if ( sct >= product ) {
            $('#section .product').addClass('on')
        } 
    })


})(jQuery)