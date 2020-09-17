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
    
    





})(jQuery)