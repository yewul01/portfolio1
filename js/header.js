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
        var company = $('.company').offset().top
    
        // 메인 페이지 헤더, 컨텐츠 겹침현상 수정 
        if (sct >= company) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }
    })

    $(window).scroll(function() { 
        var sct = $(this).scrollTop() 
        var Map = $('.map_slide').offset().top
        
        // 오시는길
        if (sct >= Map) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }
        
    })

    $(window).scroll(function() { 
        var sct = $(this).scrollTop() 
        var customer = $('.cust_slide').offset().top
       
        // 공지사항
        if (sct >= customer) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }
    })

    $(window).scroll(function() { 
        var sct = $(this).scrollTop() 
        var QA = $('.cust2_slide')
       
        // Q&A
        if (sct >= QA) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }
    })

    $(window).scroll(function() { 
        var sct = $(this).scrollTop() 
        var login = $('.log_slide')

        // 로그인
        if (sct >= login) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }   
    })

    $(window).scroll(function() { 
        var sct = $(this).scrollTop()   
        var join2 = $('.join2_slide')
        
        // 회원가입
        if (sct >= join2) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }   
    })





})(jQuery)
