function editProfile() {
  let form = document.getElementById("edit_form");

  let data = {
    user_email: form.emailID.value + form.emailDomain.value,
    user_pw: form.user_pw.value,
    user_name: form.user_name.value,
    user_confirm_pw: form.user_pw2.value,
  };

  const emailRegex = new RegExp("([\\w-\\.]+)@((?:[\\w]+\\.)+)([a-zA-Z]{2,4})");
  const passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-zA-z]).{6,20}$");

  if (
    !data.user_email ||
    !data.user_pw ||
    !data.user_name ||
    !data.user_confirm_pw ||
    data.user_pw !== data.user_confirm_pw
  ) {
    alert("입력값을 다시 한번만 확인해주세요.");
  } else if (
    !emailRegex.test(data.user_email) ||
    !passwordRegex.test(data.user_pw, data.user_confirm_pw)
  ) {
    alert(`이메일 형식과 비밀번호 형식을 다시 확인해주세요.
    비밀번호는 영문, 숫자 조합으로 6 ~ 20자리로 입력해 주세요.`);
  } else {
    axios({
      method: "post",
      url: "/zerowave/join",
      data: data,
    }).then((res) => {
      if (res.data.check == true) {
        alert(res.data.msg);
      } else {
        alert(res.data.msg);
        location.href = "/zerowave";
      }
    });
  }
};
