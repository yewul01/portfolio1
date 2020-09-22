(function($){


    // 로딩페이지
    var counter = 0;
    var c = 0;
    var i = setInterval(function() {
        $('.location_box h1').html(c + '%')
        counter++;
        c++;
        if (counter == 101) {
            clearInterval(i);
        }
    }, 5)
    

    // 화면로드
    $(window).load(function() {
        $('.introAni').delay(500).fadeOut(500)
    })
    

    $('#joBox').load('main.html')
    
    // 로그인, 회원가입  화면로드
    $('.topmenu > a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })
    
    // customer(공지사항) 화면로드
    $('.nav ul li:nth-child(4) a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // customer(공지사항) 화면로드
    $('.customer-list ul li:nth-child(1) a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // customer( Q&A ) 화면로드
    $('.customer-list ul li:nth-child(4) a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // company(오시는길) 화면로드
    $('.company-list ul li:nth-child(3) a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // 사이트맵 화면로드
    $('#footer .siteMap a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    $(window).scroll(function (e) {

        var sct = $(this).scrollTop();

        var dHeight = $(document).height();
        var wHeight = $(window).height();
        var scrollPercent = (sct / (dHeight - wHeight)) * 100;
        var roundScroll = Math.round(scrollPercent);
        
        $(".scrollBar").css("width", scrollPercent + "%");
        $(".scrollBar span").text(roundScroll);

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



        // 메인페이지 헤더, 컨텐츠 겹침현상 수정
        var company = $('.company').offset().top
        console.log(sct)
        if (sct >= company) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }


        // 오시는길
        var Map = $('.map_slide').offset().top
        if (sct >= Map) { 
            $('.h1NavTop').addClass('on')
        } else {
            $('.h1NavTop').removeClass('on')
        }
        

        // 공지사항
        var customer = $('.cust_slide').offset().top
        if (sct >= customer) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }
        
    
        // Q&A
        var QA = $('.cust2_slide').offset().top
        if (sct >= QA) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }


        // 로그인
        var login = $('.log_slide').offset().top
        if (sct >= login) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }

        
        // 회원가입
        var join2 = $('.join2_slide').offset().top
        if (sct >= join2) { 
            $('.h1NavTop').addClass('on') 
        } else { 
            $('.h1NavTop').removeClass('on') 
        }
        
    });






})(jQuery)