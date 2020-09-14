(function($){
    
    // 메인 페이지 애니메이션
    $(window).scroll(function() {
        var sct = $(this).scrollTop() 
        var comNear = $('.company').offset().top - $(this).height()/2
        if (sct >= comNear) {
            $('.company .comul .comli').addClass('fadeInUp')
            for (var i=0; i<$('.comul .comli').length; i++) {
                $('.comul .comli').eq(i).css({
                    animationDelay:i*0.1 + 's'
                }).addClass('fadeInUp')
            }
        } else { $('.company .comul .comli').removeClass('fadeInUp') }
        

        if (sct >= comNear) {
            $('.company h2').addClass('fadeInUp')
        } else {
            $('.company h2').removeClass('fadeInUp')
        }

        // Quality 배너 애니메이션
        var QualNear = $('.Quality_banner').offset().top - $(this).height()/2
        if (sct >= QualNear) {
            $('.Quality_text').addClass('on')
        } else {
            $('.Quality_text').removeClass('on')
        }
    })


})(jQuery)