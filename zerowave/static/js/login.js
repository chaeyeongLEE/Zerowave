function login(){
    var chk = document.querySelector("input[name=idsave]").checked;

        let form = document.querySelector("#login_form"); 
        let data = { email : form.user_email.value, 
                    pw : form.user_pw.value,
                    idsave : chk
                }
        if(!form.user_email.value || !form.user_pw.value){
            alert("값을 입력해주세요.");
        } else {
            axios({
                 method : "post",
                    url : "/zerowave/login",
                 data : data
             }).then(
                (res)=>{
                if(res.data.check == true) {
                    alert(res.data.msg);
                    location.href = "/zerowave";
                } else { alert(res.data.msg);}
            })}
        };