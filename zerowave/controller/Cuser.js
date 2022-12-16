const { User } = require("../model/index");

const bcrypt = require("bcryptjs");



exports.join = (req, res) => {
  let sessionInputData = req.session.inputData;

  if (!sessionInputData) {
    sessionInputData = {
      hasError: false,
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  req.session.user = null;

  res.render("join", { inputData: sessionInputData });
};




exports.postJoin = async (req, res) => {
  const enteredEmail = req.body.email;
  const enteredPassword = req.body.pw;
  const enteredConfirmPassword = req.body.confirmpw;
  const enteredName = req.body.name;

  if (
    !enteredEmail ||
    !enteredPassword ||
    !enteredConfirmPassword ||
    !enteredName ||
    enteredPassword.trim() > 16 ||
    enteredPassword.trim() < 8 ||
    enteredConfirmPassword.trim() > 16 ||
    enteredConfirmPassword.trim() < 8 ||
    enteredPassword !== enteredConfirmPassword
  ) {
    req.session.inputData = {
      hasError: true,
      message: "형식이 맞지 않습니다. 다시 한번 확인해주세요!",
      email: enteredEmail,
      pw: enteredPassword,
    };

    req.session.save(function () {
      res.redirect("/zerowave/join");
    });
    return;
  }

  const existingUser = await User.findOne({ where: { email: enteredEmail } });

  if (existingUser) {
    req.session.inputData = {
      hasError: true,
      message: "동일한 이메일이 이미 존재합니다!",
      email: enteredEmail,
      pw: enteredPassword,
    };
    req.session.save(function () {
      res.redirect("/zerowave/join");
    });
    return;
  }

  const hashedPassword = await bcrypt.hash(req.body.pw, 12);

  let data = {
    user_email: enteredEmail,
    user_pw: hashedPassword,
    user_name: enteredName,
  };

  const user = await User.create(data);
  res.redirect("/zerowave");
};



//
exports.login = (req, res) => {
  let sessionInputData = req.session.inputData; 

  if(!sessionInputData) {
    sessionInputData = {
        hasError: false,
        email: "",
        pw: "",
    };
  }

  req.session.inputData = null;
  res.render("login", {sessionInputData});
};



exports.postLogin = async (req, res) => {
  const enteredEmail = req.body.email;
  const enteredPassword = req.body.password;

  let existingUser = await User.findOne({
    where: { email: req.body.email }});

  if (!existingUser) {
    req.session.inputData = {
        hasError: true,
        message: "로그인을 할 수 없습니다. 다시 한번 시도해주세요.",
        email: enteredEmail,
        password: enteredPassword,
    };
    req.session.save(function() {
        res.redirect("/zerowave/login");
    });
    return;
  }

  const passwordAreEqual = await bcrypt.compare(enteredPassword, existingUser.password);

  if(!passwordAreEqual) {
    req.session.inputData = {
        hasError: true,
        message: "로그인을 할 수 없습니다. 다시 한번 시도해주세요.",
        email: enteredEmail,
        password: enteredPassword,
    };
    req.session.save(function() {
        res.redirect("/zerowave/login");
    });
    return;
  }

  // req.session. ~~~~~

};




exports.mypage = async (req, res) => {
  let result = await User.findOne({ where: { email: req.body.email } });
  if (result) res.render("mypage", { data: result });
  else res.redirect("/zerowave/");
};

exports.mypage_edit = async (req, res) => {
  let data = {
    pw: req.body.pw,
    name: req.body.name,
  };

  let result = await User.update(data, { where: { email: req.body.email } });
  //res.send()
};

exports.mypage_delete = async (req, res) => {
  let result = await User.destroy({ where: { email: req.body.email } });
  //res.send()
};
