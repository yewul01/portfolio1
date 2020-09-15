(function($){
    

    // 메인 페이지 애니메이션
    $(window).scroll(function() {

        var sct = $(this).scrollTop()

        
        // company 텍스트 애니메이션
        var comNear = $('.company').offset().top - $(this).height()/2
        if (sct >= comNear) {
            $('.company h2').addClass('on')
        } else {
            $('.company h2').removeClass('on')
        }



        // company li 애니메이션 
        var comNear = $('.company').offset().top - $(this).height()/2 
        if (sct >= comNear) {
            $('.company .comul .comli').addClass('animate__fadeInUp')
            for (var i=0; i<$('.comul .comli').length; i++) {
                $('.comul .comli').eq(i).css({
                    animationDelay:i*0.1 + 's'
                }).addClass('animate__fadeInUp')
            }
        } else { $('.company .comul .comli').removeClass('animate__fadeInUp') }
        





        // Quality 배너 애니메이션
        var QualNear = $('.Quality_banner').offset().top - $(this).height()/2
        if (sct >= QualNear) {
            $('.Quality_text').addClass('on')
        } else {
            $('.Quality_text').removeClass('on')
        }
        


        // news 텍스트 애니메이션
        if (sct >= QualNear) {
            $('.news_intr').addClass('on')
        } else {
            $('.news_intr').removeClass('on')
        }



        // news 더보기 버튼 애니메이션
        var news_intr = $('.news_intr').offset().top - $(this).height()/2
        if (sct >= news_intr) {
            $('.newsButton').addClass('on')
        } else {
            $('.newsButton').removeClass('on')
        }



        // Product 텍스트 애니메이션
        if (sct >= news_intr) {
            $('.prod_intr').addClass('on')
        } else {
            $('.prod_intr').removeClass('on')
        }
    })


    



})(jQuery)