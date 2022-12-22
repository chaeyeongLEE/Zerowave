function checkPassword() {
  let form = document.getElementById("password-check");

  let enteredPW = form.password.value;

  axios({
    method: "post",
    url: "mypage-user",
    data: enteredPW,
  }).then((res) => {
    alert(res.data);
  });
}
