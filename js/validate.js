(function($){

    // form 유효성체크
    $('form').submit(function(){

     // 아이디 유효성 체크 : 글자수는 3~5, 특수문자제외
     var nickname = $('#nickname_lbl').val()
     if ( nickname.length>=3 && nickname.length<=5 ) {
        for ( var i=0; i<nickname.length; i++ ) {
            var ch = nickname.charAt(i);
            if ( !(ch>='0' && ch<='9') && !(ch>='a' && ch<='z') && !(ch>='A' && ch<='Z')  ) {
                alert('아이디는 대소문자, 숫자만 가능합니다.')
                $('#nickname_lbl').css({
                    border:'1px solid #f00'
                })
                $('#nickname_lbl').focus()
                $('#nickname_lbl').select()
                return false
            }
        }
     } else {
        alert('아이디는 3~5글자 범위입니다.')
        $('#nickname_lbl').css({
            border:'1px solid #f00'
        })
        $('#nickname_lbl').focus()
        $('#nickname_lbl').select()
        return false
     }


     // 비밀번호 유효성체크 : 첫글자는 대소문자만, 반드시 숫자와 특수문자를 1개 이상 조합해서 10~12글자 범위
     var pass1 = $('#password_lbl').val()
     var pass2 = $('#password_re_lbl').val()
     var check1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
     if ( pass1.length>=10 && pass1.length<=12 ) {
        if ( !check1.test(pass1) ) {
            alert('비밀번호 첫글자는 영문대소문자만 허용하며, 반드시 숫자와 특수문자를 1개 이상 조합해주세요.')
            $('#password_lbl').css({
                border:'1px solid #f00'
            })
            $('#password_lbl').focus()
            $('#password_lbl').select()
            return false
        }
     } else {
        alert('비밀번호 글자수는 10글자~12글자 범위입니다.')
        $('#password_lbl').css({
            border:'1px solid #f00'
        })
        $('#password_lbl').focus()
        $('#password_lbl').select()
        return false
     }

     // 비밀번호와 비밀번호 확인 일치여부 점검
     // 비밀번호 확인란이 비어있으면 "비밀번호 확인을 입력하지 않았습니다." 경고창 띄우고, 나머지는 다른 오류표시 동일하게 할것
     // 일치하지 않으면 "비밀번호를 정확히 입력해 주세요" 경고창 띄우고, 나머지는 다른 오류표시와 동일하게 할것
     if ( pass2.length === 0 ) {
        alert('비밀번호 확인을 입력하지 않았습니다.') 
        $('#password_re_lbl').css({
            border:'1px solid #f00'
        })
        $('#password_re_lbl').focus()
        $('#password_re_lbl').select()
        return false
     } else if ( pass1 !== pass2 ) {
        alert('비밀번호를 정확히 입력해 주세요.') 
        $('#password_re_lbl').css({
            border:'1px solid #f00'
        })
        $('#password_re_lbl').focus()
        $('#password_re_lbl').select()
        return false
     }



     // 이름은 한글만 입력(정규표현식 p.612~p.613)
       
     var name = $('#name_lbl').val()
     var namech = /^[가-힣]+$/
     if ( !(namech.test(name)) ) {
        alert('한글이 아닙니다.')
        $('#name_lbl').focus()
        $('#name_lbl').select()
        return false
     }

     // 성별을 선택하지 않으면 '성별을 선택해 주세요'라는 문구를 .gender에 표시하고 글자색상을 #f00 할 것
     // 성별을 선택하고 나면 .gender의 문구를 '성별'로 표시하고 글자색상을 #000으로 할 것
        var gender = $('input[name="gender"]:checked').length  // 체크된 라디오버튼 갯수 추출
        if (gender === 0) {
            $('.gender').text('성별을 선택해 주세요').css({  color:'#f00'  })
            return false
        } else {
            $('.gender').text('성별').css({  color:'#000'  })
        }

     // 이메일 유효성 체크
     var email = $('#email').val()
     var emailchk = /^[a-zA-Z0-9]+$/   // 특수문제 제외 
     if ( !emailchk.test(email) ) {
        alert('이메일 형식이 틀립니다.')
        $('#email').focus()
        $('#email').select()
        return false
     }
     // 도메인타입 유효성 체크
     var domain = $('#domain').val()
     var domainchk = /^[a-zA-Z0-9]+[\.][a-z]+$/
     if ( domain.length === 0 ) {
        alert('도메인을 선택해 주세요.')
        $('#domainType').focus()
        return false
     } else {
        if ( !domainchk.test(domain) ) {
            alert('형식에 맞지 않습니다.')
            $('#domainType').focus()
            return false
        }
    }

    return false

    })




    // input 상자 백그라운드
    $('input').focus(function(){
        $(this).css({
            background:'pink'
        })
    }).blur(function(){
        if ( $(this).val().length === 0 ) {
            $(this).css({
                border:'1px solid #f00',
                background:''
            })
        } else {
            $(this).css({
                border:'1px solid #ddd',
                background:''
            })
        }
    })

    // id입력상자만 포커스 했을때 뒤에 "필수항목입니다." 문구 표시하기
    $('#nickname_lbl').focus(function(){
        $(this).after('<strong> 필수항목</strong>')
    }).blur(function(){
        $(this).next().remove()
    })

    // 비밀번호 칸에 포커스했을때  #warning에 '비밀번호 첫글자는 영문대소문자만 허용하며, 반드시 숫자와 특수문자를 1개 이상 조합해주세요.' 문구 표시
    $('#pass1').focus(function(){
        $(this).next().text('비밀번호 첫글자는 영문대소문자만 허용하며, 반드시 숫자와 특수문자를 1개 이상 조합해주세요.')
    }).blur(function(){
        $(this).next().text('')
    })

    // 이메일 도메인 선택을 변경(change())했을때 변경한 내용으로 채우기
    $('#domainType').on('change', function(){
        $('#domainType option:selected').each(function(){
            if( $(this).val()==='title' ) {
                $('#domain').val('')
                $('#domain').attr('disabled', true)
            } else if ( $(this).val()==='self' ) {
                $('#domain').val('')
                $('#domain').attr('disabled', false)
            } else {
                $('#domain').val( $(this).val() )
                $('#domain').attr('disabled', true)
            }
        })
    })








})(jQuery)