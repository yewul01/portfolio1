(function($){
    

    // 메인 페이지 애니메이션
    $(window).scroll(function() {

        var sct = $(this).scrollTop()
        console.log(sct)

        
        // company 텍스트 애니메이션
        var comNear = $('.company').offset().top - $(this).height()/2
        if (sct >= comNear) {
            $('.company h2').addClass('on')
        } else if (sct===0) {
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
        } else if (sct===0) { 
            $('.company .comul .comli').removeClass('animate__fadeInUp')
        }
        

        // Quality 배너 애니메이션
        var QualNear = $('.Quality_banner').offset().top - $(this).height()/2
        if (sct >= QualNear) {
            $('.Quality_text').addClass('on')
        } else if (sct===0) {
            $('.Quality_text').removeClass('on')
        }
        

        // news 텍스트 애니메이션
        if (sct >= QualNear) {
            $('.news_intr').addClass('on')
        } else if (sct===0) {
            $('.news_intr').removeClass('on')
        }


        // news 더보기 버튼 애니메이션
        var news_intr = $('.news_intr').offset().top - $(this).height()/2
        if (sct >= news_intr) {
            $('.newsButton').addClass('on')
        } else if (sct===0) {
            $('.newsButton').removeClass('on')
        }


        // Product 텍스트 애니메이션
        if (sct >= news_intr) {
            $('.prod_intr').addClass('on')
        } else if (sct===0) {
            $('.prod_intr').removeClass('on')
        }

        if (sct >= 10) {
            $('.toTop').addClass('on').stop().animate({
                opacity: '1'
            }, 300)
        } else {
            $('.toTop').removeClass('on').stop().animate({
                opacity: '0'
            }, 300)
        }

        // toTop 버튼 이벤트
    $('.toTop').on('click',function () {
        $('html, body').stop().animate({
            scrollTop: '0'
        }, 800, 'linear')
    })

})
    

    


    



})(jQuery)