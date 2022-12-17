//생년월일
    const domainListEl = document.querySelector('#domain-list')
    const domainInputEl = document.querySelector('#domain-txt')
    domainListEl.addEventListener('change', (event) => {
    if(event.target.value !== "type") {
    domainInputEl.value = event.target.value
    domainInputEl.disabled = true
        } else { 
    domainInputEl.value = ""
    domainInputEl.disabled = false
    }
});        
    const birthYearEl = document.querySelector('#birth-year')
    isYearOptionExisted = false;
    birthYearEl.addEventListener('focus', function () {
        if(!isYearOptionExisted) {
        YearOptionExisted = true
        for(var i = 1940; i <= 2022; i++) {
    const YearOption = document.createElement('option')
        YearOption.setAttribute('value', i)
        YearOption.innerText = i
        this.appendChild(YearOption);
        }
    }
});
    const birthMonthEl = document.querySelector('#birth-month')
    isMonthOptionExisted = false;
    birthMonthEl.addEventListener('focus', function () {
        if(!isMonthOptionExisted) {
            isMonthOptionExisted = true
        for(var i = 1; i <= 12; i++) {
    const MonthOption = document.createElement('option')
        MonthOption.setAttribute('value', i)
        MonthOption.innerText = i
        this.appendChild(MonthOption);
        }
    }
});
    const birthDayEl = document.querySelector('#birth-day')
    isDayOptionExisted = false;
    birthDayEl.addEventListener('focus', function () {
        if(!isDayOptionExisted) {
            isDayOptionExisted = true
        for(var i = 1; i <= 31; i++) {
    const DayOption = document.createElement('option')
        DayOption.setAttribute('value', i)
        DayOption.innerText = i
        this.appendChild(DayOption);
        }
    }
});

function join(){
let form = document.querySelector("#join_form"); 
let data = { email : form.user_email.value , 
                pw : form.user_pw.value , 
              name : form.user_name.value }
    if(!form.user_email.value&& !form.user_pw.value && !form.user_name.value){
        alert("빈칸을 입력하세요");
        }
        axios({
             method : "post",
                url : "/join",
             data : data
         }).then((res)=>{
                if (res.success) {
                  // 서버에서 가입 성공응답이 오면 login페이지로 이동
                  location.href = "/login";
                } else {
                  alert(res.msg);
                }
              })
              .catch(err => {
                console.error("회원가입 중 에러 발생");
              });
          }

let elInputPassword = document.querySelector("#user_pw1")
let elInputPasswordretype = document.querySelector("#user_pw2")
let elMismatchmessage = document.querySelector(".mismatch-message")


//비밀번호 입력창에 값을 입력하면, 비밀번호 값과 비밀번호 확인값이 일치하지 않으면 불일치 메시지를 표시하는 함수
elInputPasswordretype.onkeyup = function () {
    if ( isMatch(elInputPassword.value, elInputPasswordretype.value) ) {
      elMismatchmessage.classList.add('hide')
    }
    else {
        elInputPasswordretype.value == elMismatchmessage.classList.remove('hide')
     }
    
    }

//비밀번호 값과 비밀번호 확인값이 일치하는지 판별하는 함수
function isMatch (password1, password2) {
    if ( password1 === password2 ) {
      return true;
    }
    else {
      return false;
     }
    }