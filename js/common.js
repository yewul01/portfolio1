(function($){

    $('#joBox').load('main.html')

    $('.topmenu > a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    $('.customer > a').on('click', function(e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#joContainer').remove()
        $('#joBox').load(url)
    })

    // 헤더 자연스럽게 열기
    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2').stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2').stop().slideUp(700)
        }
    )
    





})(jQuery)