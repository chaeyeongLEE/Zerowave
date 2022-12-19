function login(){
    let form = document.querySelector("#login_form"); 
    let data = { email : form.user_email.value , 
                    pw : form.user_pw.value , 
                  name : form.user_name.value }
        if(!form.user_email.value&&!form.user_pw.value){
            alert("값을 입력해주세요");
            }
            axios({
                 method : "post",
                    url : "/login",
                 data : data
             }).then((res)=>{
                 location.href = "/";
             })
    }
    
    