(function($){


    $(document).scroll(function (e) {
        var sct = $(window).scrollTop();
        var dHeight = $(document).height();
        var wHeight = $(window).height();
        var scrollPercent = (sct / (dHeight - wHeight)) * 100;
        var roundScroll = Math.round(scrollPercent);
        
        // 헤더 스크롤바
        $(".scrollBar").css("width", scrollPercent + "%");
        $(".scrollBar span").text(roundScroll);
        
    });

    $(window).scroll(function() { 
        var sct = $(this).scrollTop() 
        // 메인 페이지 헤더, 컨텐츠 겹침현상 수정 
        var company = $('.company').offset().top 
        if (sct >= company) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        } 
         

        // customer 페이지 헤더, 컨텐츠 겹침현상 수정 
        var cust_slide = $('.cust_slide').offset().top 
        if (sct >= cust_slide) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        } 
 

         
    }) 


         
    $('html,body').animate({
        scrollTop:'0'
    },800)





})(jQuery)