function login(){
    let form = document.querySelector("#login_form"); 
    let data = { email : form.user_email.value , 
                    pw : form.user_pw.value  }
        if(!form.user_email.value&&!form.user_pw.value){
            alert("값을 입력해주세요");
            }
            axios({
                 method : "post",
                    url : "/zerowave/login",
                 data : data
             }).then((res)=>{
                if(res.data) {
                    alert("로그인 성공!");
                    location.href = "/zerowave";
                } else { alert("다시 한번만 시도해주세요.")}
                 
             })
    }
    
    