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

    // 제품소개 (페이지) 화면로드
    $('.product-list ul li:nth-child(1) a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // 푸터구역 화면로드
    
    // customer(공지사항) 화면로드
    $('#footer .footerMenu a:nth-child(1)').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // company(회사소개) 화면로드
    $('#footer .footerMenu a:nth-child(2)').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // business(사업소개) 화면로드
    $('#footer .footerMenu a:nth-child(3)').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // 제품소개(페이지) 화면로드
    $('#footer .footerMenu a:nth-child(4)').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // 문의하기 화면로드
    $('#footer .footerMenu a:nth-child(5)').on('click', function(e) {
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


         // 메인페이지 헤더, 컨텐츠 겹침현상 수정
        if ( $('#joContainer').children().is('#section') ) {
            var company = $('.company').offset().top
            headerScroll(company)
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

        // 회사소개(company1) 헤더 스타일
        if ( $('#joContainer').children().is('#company1_section') ) {
            var company1 = $('.sectMenu_box').offset().top
            headerScroll(company1)
        }
        
        // 오시는길(company3) 헤더 스타일
        if ( $('#joContainer').children().is('#map_section') ) {
            var Map = $('.map_Menu_box').offset().top
            headerScroll(Map)
        }

        // 제품소개 페이지(product1) 헤더 스타일
        if ( $('#joContainer').children().is('#product1_section') ) {
            var product1 = $('.sectMenu_box').offset().top
            headerScroll(product1)
        }

        // 공지사항(customer1) 헤더 스타일
        if ( $('#joContainer').children().is('#customer_section') ) {
            var customer = $('.sectMenu_box').offset().top
            headerScroll(customer)
        }

        // Q&A(customer4) 헤더 스타일
        if ( $('#joContainer').children().is('#customer4_section') ) {
            var customer2 = $('.sectMenu_box').offset().top
            headerScroll(customer2)
        }

        // 문의하기 헤더 스타일
        if ( $('#joContainer').children().is('#contact_section') ) {
            var conatact = $('.sectMenu_box').offset().top
            headerScroll(conatact)
        }



        // 메인페이지 what we do 애니메이션 
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
        

        // 메인페이지 Quality 배너 애니메이션
        var QualNear = $('.Quality_banner').offset().top - $(this).height()/2
        if (sct >= QualNear) {
            $('.Quality_text').addClass('on')
        } else if (sct===0) {
            $('.Quality_text').removeClass('on')
        }
        

        // 메인페이지 news 텍스트 애니메이션
        if (sct >= QualNear) {
            $('.news_intr').addClass('on')
        } else if (sct===0) {
            $('.news_intr').removeClass('on')
        }


        // 메인페이지 news 더보기 버튼 애니메이션
        var news_intr = $('.news_intr').offset().top - $(this).height()/2
        if (sct >= news_intr) {
            $('.newsButton').addClass('on')
        } else if (sct===0) {
            $('.newsButton').removeClass('on')
        }


        // 메인페이지 Product 텍스트 애니메이션
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

    
    // resize 이벤트

    init()

    var flag = true;
    function init() {
        var ww = $(window).innerWidth()
        if (ww > 1180) {
            $('html').addClass('pc').removeClass('mobile')
            if (flag) {
                $('.h1NavTop .nav').show()
                $('.depth1 > li').removeClass('on')
                $('.open_nav, .close_nav, .depth2').hide()
                flag = false
            }
        } else if (ww <= 1180) {
            $('html').addClass('mobile').removeClass('pc')
            if (!flag) {
                $('.open_nav').show()
                $('.h1NavTop .nav, .depth2').hide()
                flag = true
            }
        }
    }


    
    $(window).on('resize', function() {
        init()
    })


    // 모바일헤더
    $('.depth1 > li').hover(
        function() {
            if ( $('html').hasClass('pc') ) {
                $('.depth2, .decoBox').stop().slideDown(300)
            }
        },
        function() {
            if ( $('html').hasClass('pc') ) {
                $('.depth2, .decoBox').stop().slideUp(300)
            }
        }
    )
    
    $('.depth1 > li > a').on('click',function() {
        if ( $('html').hasClass('mobile') ) {
            $(this).find('.depth2').stop().slideToggle(300)
            $(this).siblings().find('.depth2').stop().slideUp(300)
        }
    })

    // 모바일헤더 글자색상
    $('.nav .depth1 > li > a').on('click',function() {
        
        $(this).parent().addClass('active')
        $(this).parent().siblings().removeClass('active')
    })
    
    // 모바일화면에서 1단계메뉴 클릭했을때 2단계메뉴 보이게 하기
    $(".depth1 > li > a").on('click', function(e){
        e.preventDefault()
        if ( $('html').hasClass('mobile') ) {
          $(this).toggleClass('on')
          $(this).parent().find('.depth2').stop().slideToggle(300)
          $(this).parent().siblings().each(function(){
            if ( $(this).css('display') === 'block' ) {
                $(this).find('.depth2').slideUp(300)
                $(this).removeClass('on')
            } else if ($('html').hasClass('pc')){
                var url = $(this).attr('href')
                $('#joContainer').remove()
                $('#joBox').load(url)
            }
          })
        }
    })



    // pc화면에서 1단계메뉴에 호버했을때 2단계메뉴 보이게 하기
    $('.depth1 > li').hover(
      function(){
        if ( $('html').hasClass('pc') ) {
          $(this).find('.depth2, .decoBox').stop().slideDown(300)
        }
      },
      function(){
        if ( $('html').hasClass('pc') ) {
          $(this).find('.depth2, .decoBox').stop().slideUp(300)
        }
      }
    )

    // 2단계 메뉴 클릭하면 모든 화면에서 페이지 로드시킨 후, 모바일화면에서는 햄버거 버튼만 보이게 하기
    $(".nav .depth2 > li > a, .topmenu a").on("click", function (e) {
        e.preventDefault();
        var url = $(this).attr("href");
        $("#joContainer").remove();
        $("#joBox").load(url);
        if ($("html").hasClass("mobile")) {
          $(".open_nav").show();
          $(".h1NavTop .nav, .depth2, .close_nav").hide();
          $(".depth1 > li").removeClass("on");
        }
      });


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

    // 푸터구역의 패밀리사이트 선택 변경해서 이동하기
    $('.frmLink a').on('click', function(){
        var familyUrl = $('#siteLink').val()
        if ( familyUrl === "" ) {
          return false
        } else {
          $(this).attr({
            href : familyUrl
          })
        }
    })
 



})(jQuery)