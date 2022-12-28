function forgot (){
    let form = document.getElementById("forgot_form");
    let data ={ email : form.find_email.value}
    
    axios ({
        method: "post",
        url: "/zerowave/forgot",
        data: data
    }).then((res) => {
        alert(res.data);
        location.href="/zerowave";
    })
};