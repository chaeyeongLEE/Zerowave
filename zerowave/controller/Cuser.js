const { User } = require("../model/index");
const bcrypt = require("bcryptjs");
const { options } = require("../routes");
const option = { httpOnly: true, maxAge: 864000};

// 회원가입 POST
exports.postJoin = async (req, res) => {
  const enteredEmail = req.body.user_email;
  const enteredPassword = req.body.user_pw;
  const enteredName = req.body.user_name;
  const enteredConfirmPassword = req.body.user_pw2;
  
  const hashedPassword = await bcrypt.hash(enteredPassword, 12);
  
  const existingUserEmail = await User.findOne({
    raw: true,
    where: { user_email: enteredEmail },
  });
  
  if (existingUserEmail) {
    res.send({ check: true, msg: "동일한 이메일이 이미 사용중입니다." });
  } else {
    req.session.user = {
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
    };
    
    let data = {
      user_email: enteredEmail,
      user_pw: hashedPassword,
      user_name: enteredName,
    };
    
    await User.create(data);
    res.send({ check: false, msg: "회원가입에 성공했습니다." });
  }
};

// 로그인 POST
exports.postLogin = async (req, res) => {
const enteredEmail = req.body.email;
const enteredPassword = req.body.pw;
const idsave = req.body.idsave;

let result = await User.findOne({
    raw: true,
    where: { user_email: enteredEmail },
  });

const samePassword = await bcrypt.compare(enteredPassword, result.user_pw);

if (samePassword) {
    req.session.user = {
      email: enteredEmail,
      name: result.user_name,
      password: enteredPassword,
    };
    if(idsave === true){
      res.cookie('loginID', enteredEmail, options);
    }  
    res.send(true);
  } else res.send(false);
};

// 로그아웃 POST
exports.postLogout = (req, res) => {
  console.log("logout");
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("로그아웃 성공");
  });
};

// 마이페이지 POST
exports.mypage = (req, res) => {
  if (req.session.user) {
    res.render("mypage");
  } else res.redirect("/zerowave");
};


exports.passwordCheck =(req,res)=> {  
  console.log(req.body);
  console.log(req.body.data);
  console.log(req.session.user.password);

  if(req.body.enteredPW == req.session.user.password) {
  
    res.redirect('/zerowave/mypage-edit');
  } else res.send("비밀번호가 같지 않습니다.")
  
};


exports.mypage_edit = (req, res) => {
  if (req.session.user) {
    res.render("mypage_edit");
  } else res.redirect("/zerowave/mypage");
};



// 마이페이지 내 회원 탈퇴

exports.mypage_delete = async (req, res) => {
  let result = await User.destroy({ where: { user_email: req.session.user.email } });
  req.session.destroy(function (err) {
    if (err) throw err;
  });
  res.send("회원 탈퇴 처리가 완료되었습니다.")
};