function editProfile() {
  let form = document.getElementById("edit-form");

  let data = {
    user_email: form.email.value,
    user_pw: form.pw1.value,
    user_name: form.name.value,
    user_confirm_pw: form.pw2.value,
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
    !passwordRegex.test(data.user_pw, data.user_confirm_pw)
  ) {
    alert(`새 비밀번호 형식을 다시 확인해주세요.
비밀번호는 영문, 숫자 조합으로 6 ~ 20자리로 입력해 주세요.`);
  } else {
    axios({
      method: "patch",
      url: "/zerowave/mypage-edit",
      data: data,
    }).then((res) => {
        if(res.data) {
            alert("회원정보 수정을 완료하였습니다!");
            location.href="/zerowave/mypage"
        } else {
            alert("다시 한번만 확인해주세요.")
        }
    });
  }
};
