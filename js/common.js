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

    // 스크롤시 헤더 스타일 변경
    var sct;
    $(window).scroll(function (e) {

        var sct = $(this).scrollTop();

        var dHeight = $(document).height();
        var wHeight = $(window).height();
        var scrollPercent = (sct / (dHeight - wHeight)) * 100;
        var roundScroll = Math.round(scrollPercent);
        
        $(".scrollBar").css("width", scrollPercent + "%");
        $(".scrollBar span").text(roundScroll);


        // 메인페이지 헤더 스타일
        if ( $('#joContainer').children().is('#join2_section') ) {
            var join2 = $('.join2_box').offset().top
            headerScroll(join2)
        }

        // 회원가입 헤더 스타일
        if ( $('#joContainer').children().is('#join2_section') ) {
            var join2 = $('.join2_box').offset().top
            headerScroll(join2)
        }

        // 로그인 헤더 스타일
        if ( $('#joContainer').children().is('#login_section') ) {
            var login = $('.login_box').offset().top
            headerScroll(login)
        }
        
        // 오시는길 헤더 스타일
        if ( $('#joContainer').children().is('#map_section') ) {
            var Map = $('.mapBox').offset().top
            headerScroll(Map)
        }

        // 공지사항 헤더 스타일
        if ( $('#joContainer').children().is('#customer_section') ) {
            var customer = $('.notice').offset().top
            headerScroll(customer)
        }

        // 메인페이지 헤더, 컨텐츠 겹침현상 수정
        if ( $('#joContainer').children().is('#section') ) {
            var company = $('.company').offset().top
            headerScroll(company)
        }

        // Q&A
        if ( $('#joContainer').children().is('#customer2_section') ) {
            var customer2 = $('.noticeBox').offset().top
            headerScroll(customer2)
        }



        // company li 애니메이션 
        var comNear = $('.company').offset().top - $(this).height()/2 
        if (sct >= comNear) {
            $('.company h2').addClass('on')
            $('.company .comul .comli').addClass('animate__fadeInUp')
            for (var i=0; i<$('.comul .comli').length; i++) {
                $('.comul .comli').eq(i).css({
                    animationDelay:i*0.1 + 's'
                }).addClass('animate__fadeInUp')
            }
        } else if (sct===0) { 
            $('.company h2').removeClass('on')
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

        

        function headerScroll(something) {
            if (sct >= something) {
                $('.h1NavTop').addClass('on')
            } else {
                $('.h1NavTop').removeClass('on')
            }
        }
        
        

         
    });

    // $('.depth1').hover(
    //     function(){
    //         $(this).find('.depth2')
    //         .stop().slideDown(500)
    //     },
    //     function(){
    //         $(this).find('.depth2')
    //         .stop().slideUp(500)
    //     }
    // )

    // $('.nav').hover (
    //     function(){
    //         $(this).next()
    //         .stop().slideDown(500)
    //     },
    //     function(){
    //         $(this).next()
    //         .stop().slideUp(250)
    //     }
    // )

    // toTop 버튼 이벤트
    $('.toTop').on('click',function () {
        $('html, body').stop().animate({
            scrollTop: '0'
        }, 800, 'linear')

    })

    // 햄버거버튼 클릭시 네비박스 나타나기
    $('.h1NavTop .open_nav').on('click',function() {
        $(this).next().stop().slideDown(300)
        $(this).hide()
        $(this).nextAll('.close_nav').css({
            display: 'block'
        })
    })

    // 닫기버튼 클릭시 네비박스 사라지기
    $('.h1NavTop .close_nav').on('click',function() {
        $(this).prev().prev().stop().slideUp(300)
        $(this).hide()
        $(this).prevAll('.open_nav').css({
            display: 'block'
        })
        $('.depth2').hide()
    })

    // 모바일헤더 호버시 슬라이드 효과
    $('.nav .depth1 li').hover(
        function(){
            winWidth = $(window).innerWidth()
            if (winWidth > 1180) {
                $('.nav .depth1').find('.depth2').stop().slideDown(300)
            } else {
                $(this).find('.depth2').stop().slideDown(300)
            }
        },
        function(){
            winWidth = $(window).innerWidth()
            if (winWidth > 1180) {
                $('.nav .depth1').find('.depth2').stop().slideUp(300)
            } else {
                $(this).find('.depth2').stop().slideUp(300)
            }
        }
    )

  

    init()

    var flag = true;
    function init() {
        var ww = $(window).width()
        if (ww > 1180 && flag) {
            $('.h1NavTop .nav').show()
            $('.open_nav, .close_nav, .depth2').hide()
            flag = false
        } else if (ww <= 1180 && !flag) {
            $('.open_nav').show()
            $('.h1NavTop .nav, .depth2').hide()
            flag = false
        }
    }
    $(window).on('resize', function() {
        init()
    })

    
    

    








})(jQuery)