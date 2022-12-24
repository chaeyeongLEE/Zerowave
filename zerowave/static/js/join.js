//이메일선택시 반영되게
const domainListEl = document.querySelector("#domain-list");
const domainInputEl = document.querySelector("#domain-txt");
domainListEl.addEventListener("change", (event) => {
  if (event.target.value !== "type") {
    domainInputEl.value = event.target.value;
    domainInputEl.disabled = true;
  } else {
    domainInputEl.value = "";
    domainInputEl.disabled = false;
  }
});



 //생년월일 함수
// const birthYearEl = document.querySelector("#birth-year");
// isYearOptionExisted = false;
// birthYearEl.addEventListener("focus", function () {
//   if (!isYearOptionExisted) {
//     YearOptionExisted = true;
//     for (var i = 1940; i <= 2022; i++) {
//       const YearOption = document.createElement("option");
//       YearOption.setAttribute("value", i);
//       YearOption.innerText = i;
//       this.appendChild(YearOption);
//     }
//   }
// });
// const birthMonthEl = document.querySelector("#birth-month");
// isMonthOptionExisted = false;
// birthMonthEl.addEventListener("focus", function () {
//   if (!isMonthOptionExisted) {
//     isMonthOptionExisted = true;
//     for (var i = 1; i <= 12; i++) {
//       const MonthOption = document.createElement("option");
//       MonthOption.setAttribute("value", i);
//       MonthOption.innerText = i;
//       this.appendChild(MonthOption);
//     }
//   }
// });
// const birthDayEl = document.querySelector("#birth-day");
// isDayOptionExisted = false;
// birthDayEl.addEventListener("focus", function () {
//   if (!isDayOptionExisted) {
//     isDayOptionExisted = true;
//     for (var i = 1; i <= 31; i++) {
//       const DayOption = document.createElement("option");
//       DayOption.setAttribute("value", i);
//       DayOption.innerText = i;
//       this.appendChild(DayOption);
//     }
//   }
// });

function join() {
  let form = document.getElementById("join_form");
  let data = {
    user_email: form.emailID.value + form.emailDomain.value,
    user_pw: form.user_pw.value,
    user_name: form.user_name.value,
    user_confirm_pw: form.user_pw2.value,
  };

  if (
    !data.user_email ||
    !data.user_pw ||
    !data.user_name ||
    !data.user_confirm_pw ||
    data.user_pw !== data.user_confirm_pw ||
    data.user_pw.length < 6 || data.user_confirm_pw.length < 6
  ) {
    alert("다시 한번 확인해주세요. 비밀번호는 6자리 이상으로 입력해주세요.");
  }   else {
    axios({
      method: "post",
      url: "/zerowave/join",
      data: data,
    }).then((res) => {
        if (res.data.check == true) {
          alert(res.data.msg)
        } else { 
          alert(res.data.msg);
          location.href="/zerowave";
        }
      });
    };
};

//비밀번호 입력창에 값을 입력하면, 비밀번호 값과 비밀번호 확인값이 일치하지 않으면 불일치 메시지를 표시하는 함수
let elInputPassword = document.querySelector("#user_pw1");
let elInputPasswordretype = document.querySelector("#user_pw2");
let elMismatchmessage = document.querySelector(".mismatch-message");

elInputPasswordretype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputPasswordretype.value)) {
    elMismatchmessage.classList.add("hide");
  } else {
    elInputPasswordretype.value == elMismatchmessage.classList.remove("hide");
  }
};

//비밀번호 값과 비밀번호 확인값이 일치하는지 판별하는 함수
function isMatch(password1, password2) {
  if (password1 === password2) {
    return true;
  } else {
    return false;
  }
}
