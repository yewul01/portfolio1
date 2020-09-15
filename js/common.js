(function($){
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

    $(window).load(function() {
        $('.introAni').delay(500).fadeOut(500)
    })
    

    $('#joBox').load('main.html')

    $('.topmenu > a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    $('.nav ul li:nth-child(4) a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    $('.customer ul li:nth-child(1) a').on('click', function(e) {
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

        var cust_slide = $('.cust_slide').offset().top
        if (sct >= cust_slide) {
            $('.h1NavTop').addClass('on')
        } else {
            $('.h1NavTop').removeClass('on')
        }

        
    })
    




})(jQuery)