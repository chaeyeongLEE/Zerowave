const { User } = require("../model/index");
const bcrypt = require("bcryptjs");

exports.join = (req, res) => {
  res.render("join");
};

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

exports.login = (req, res) => {
  var userEmail ="";
  if(req.cookies['loginId'] !== undefined){
    console.log("로그인 정보 있음");
    userEmail = req.cookies['loginId'];
  }
  res.render("login", {userEmail: userEmail});
};

exports.postLogin = async (req, res) => {
  const enteredEmail = req.body.email;
  const enteredPassword = req.body.pw;
  const idsave = req.body.idsave;

  if(idsave === true){
    res.cookie('loginID', enteredEmail);
    console.log(req.cookies);
  }  
  

  let result = await User.findOne({
    raw: true,
    where: { user_email: enteredEmail },
  });

 // console.log(result.user_name);

  const samePassword = await bcrypt.compare(enteredPassword, result.user_pw);

  if (samePassword) {
    req.session.user = {
      email: enteredEmail,
      name: result.user_name,
      password: enteredPassword,
    };
    res.send(true);
  } else res.send(false);

};

exports.postLogout = (req, res) => {
  console.log("logout");
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("로그아웃 성공");
  });
};

exports.mypage = (req, res) => {
  if (req.session.user) {
    res.render("mypage");
  } else res.redirect("/zerowave");
};

// exports.mypage_edit = async (req, res) => {
//   let data = {
//     pw: req.body.pw,
//     name: req.body.name,
//   };

//   let result = await User.update(data, { where: { email: req.body.email } });
//   res.redirect("/zerowave/mypage");
// };

exports.mypage_delete = async (req, res) => {
  let result = await User.destroy({ where: { user_email: req.session.user.email } });
  req.session.destroy(function (err) {
    if (err) throw err;
  });
  res.send("회원 탈퇴 처리가 완료되었습니다.")
};
