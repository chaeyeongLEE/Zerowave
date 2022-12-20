const { User } = require("../model/index");
const bcrypt = require("bcryptjs");

exports.join = (req, res) => {
  res.render("join");
};

exports.postJoin = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.user_pw, 12);

  let data = {
    user_email: req.body.user_email,
    user_pw: hashedPassword,
    user_name: req.body.user_name,
  };
  console.log(data);
  await User.create(data);
  // 세션 저장
  req.session.user = req.body.user_email;
  res.send(true);
  // 회원가입 -> 로그인 성공된 상태로 보이게
  // 이메일, 비번 검사 -> 세션 저장
};
exports.login = (req, res) => {
  res.render("login");
};

exports.postLogin = async (req, res) => {
  const enteredEmail = req.body.email;
  const enteredPassword = req.body.pw;

  let result = await User.findOne({
    where: { user_email: enteredEmail },
  });

  console.log(typeof (result));

  const samePassword = await bcrypt.compare(enteredPassword, result.user_pw);
  console.log(samePassword);
  if (samePassword) {
    req.session.user = req.body.email;
    res.send(true);
  } else res.send(false);
};



exports.postLogout = (req,res) =>{
  console.log("logout");
  req.session.destroy(function(err){
      if(err) throw err;
      res.send("로그아웃 성공");
  }) 
};


exports.mypage = async (req, res) => {
  let result = await User.findOne({ where: { email: req.body.email } });
  if (result) res.render("mypage", { data: result });
  else res.redirect("/zerowave");
};

exports.mypage_edit = async (req, res) => {
  let data = {
    pw: req.body.pw,
    name: req.body.name,
  };

  let result = await User.update(data, { where: { email: req.body.email } });
  res.redirect("/zerowave/mypage");
};

exports.mypage_delete = async (req, res) => {
  let result = await User.destroy({ where: { email: req.body.email } });
  res.redirect("/zerowave");
};
