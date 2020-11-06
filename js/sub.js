(function($){
    
    var sct;
    $(window).scroll(function (e) {

        var sct = $(this).scrollTop();

    // company1 teamInfo 애니메이션
    var comNear = $('.comTeamInfo').offset().top - $(this).height()/2 
        if (sct >= comNear) {
            $('.comTeamInfo h3').addClass('on')
            $('.comTeamInfo .com1ul .com1li').addClass('animate__fadeInUp')
            for (var i=0; i<$('.com1ul .com1li').length; i++) {
                $('.com1ul .com1li').eq(i).css({
                    animationDelay:i*0.1 + 's'
                }).addClass('animate__fadeInUp')
            }
        } else if (sct===0) { 
            $('.comTeamInfo h3').removeClass('on')
            $('.comTeamInfo .com1ul .com1li').removeClass('animate__fadeInUp')
        }

    });

})(jQuery)

