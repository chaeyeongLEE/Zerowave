function login(){
        let form = document.querySelector("#login_form"); 
        let data = { email : form.user_email.value , 
                    pw : form.user_pw.value  }
        if(!form.user_email.value || !form.user_pw.value){
            alert("값을 입력해주세요");
                }           
            axios({
                 method : "post",
                    url : "/zerowave/login",
                 data : data
             }).then(
                (res)=>{
                if(res.data) {
                    alert("로그인 성공!");
                    location.href = "/zerowave";
                } else { alert("다시 한번만 시도해주세요.")}
                 
             })

            if (document.form.idsave.checked == true) { // 아이디 저장을 체크 하였을때
                setCookie("id", document.form.userid.value, 7); //쿠키이름을 id로 아이디입력필드값을 7일동안 저장
            } else { // 아이디 저장을 체크 하지 않았을때
                setCookie("id", document.form.userid.value, 0); //날짜를 0으로 저장하여 쿠키삭제
            }
     
            document.form.submit(); //유효성 검사가 통과되면 서버로 전송.
            
}
    
//아이디 저장

    window.onload = function() {
        if (getCookie("id")) { // getCookie함수로 id라는 이름의 쿠키를 불러와서 있을경우
            document.form.userid.value = getCookie("id"); //input 이름이 id인곳에 getCookie("id")값을 넣어줌
            document.form.idsave.checked = true; // 체크는 체크됨으로
        } 
    }
 
    function setCookie(name, value, expiredays) //쿠키 저장함수
    {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires="
                + todayDate.toGMTString() + ";"
    }
 
    function getCookie(Name) { // 쿠키 불러오는 함수
        var search = Name + "=";
        if (document.cookie.length > 0) { // if there are any cookies
            offset = document.cookie.indexOf(search);
            if (offset != -1) { // if cookie exists
                offset += search.length; // set index of beginning of value
                end = document.cookie.indexOf(";", offset); // set index of end of cookie value
                if (end == -1)
                    end = document.cookie.length;
                return unescape(document.cookie.substring(offset, end));
            }
        }
    }
 
    // function login() {
    //     var frm = document.loginForm;
    //     if (!frm.userid.value) { //아이디를 입력하지 않으면.
    //         alert("아이디를 입력 해주세요!");
    //         frm.userid.focus();
    //         return;
    //     }
    //     if (!frm.pwd.value) { //패스워드를 입력하지 않으면.
    //         alert("패스워드를 입력 해주세요!");
    //         frm.pwd.focus();
    //         return;
    //     }
 
    //     if (document.loginForm.idsave.checked == true) { // 아이디 저장을 체크 하였을때
    //         setCookie("id", document.loginForm.userid.value, 7); //쿠키이름을 id로 아이디입력필드값을 7일동안 저장
    //     } else { // 아이디 저장을 체크 하지 않았을때
    //         setCookie("id", document.loginForm.userid.value, 0); //날짜를 0으로 저장하여 쿠키삭제
    //     }
 
    //     document.loginForm.submit(); //유효성 검사가 통과되면 서버로 전송.
 
    // }