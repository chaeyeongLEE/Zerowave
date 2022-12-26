const main = require('../model/index');

exports.main = (req, res) => { res.render('main', req.result); }; // main 페이지 

// 로그인, 회원가입 GET

exports.mainC = (req, res) => {
  req.result["type"] = req.params.type;
  if ( req.params.type == 'login' ) login(req,res);
 // if ( req.params.type == 'mypage-user' ) mypageUser(req,res);
  else res.render(req.params.type, req.result);
};

const login = (req, res) => {
  console.log(req.cookies);
  req.result["email"] = req.cookies['loginID'];
  console.log( req.result );
  res.render('login', req.result);
}

// const mypageUser = (req, res) => {
//   console.log(req.cookies);

//   res.render('login', req.result);
// }
