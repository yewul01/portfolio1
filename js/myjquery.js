(function($){

    $('.section').on('mousewheel', function(event, wh) {
        if (wh > 0) {
            var prev = $(this).prev().offset().top
            $('html,body').stop().animate({
                scrollTop:prev
            }, 800)
        } else if (wh < 0) {
            var next = $(this).next().offset().top
            $('html, body').stop().animate({
                scrollTop:next
            }, 800)
        }
    })


})(jQuery)