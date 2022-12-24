function checkPassword() {
  var form = document.getElementById("password-check");

  let enteredPW = form.password.value;

  axios({
    method: "POST",
    url: "/zerowave/mypage-user",
    data: {enteredPW}
  }).then((res) => {
    if(res.data == true) {
        location.href='/zerowave/mypage-edit'
    } else {
        alert("비밀번호가 맞지 않습니다.")
    }
  });
}
