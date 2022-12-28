const { User } = require("../model/index");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

exports.email = async(req, res) => {

  let email = req.body.email;
  
  const existingUserEmail = await User.findOne({
    raw: true,
    where: { user_email: email } });

  if (!existingUserEmail) { res.send({check: false, msg:"입력하신 이메일 주소가 존재하지 않습니다."}) }

  else { 
    var variable ="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    var randomPassword = createRandomPassword(variable, 8);
    
    //비밀번호 랜덤 함수
    
    function createRandomPassword(variable, passwordLength) {
      var randomString = "";
      for (var j = 0; j < passwordLength; j++)
      randomString += variable[Math.floor(Math.random() * variable.length)];
      return randomString;
    }
    
    const hashedPassword = await bcrypt.hash(randomPassword, 12);
    let data = { user_pw: hashedPassword };
    
    let result = await User.update(data, {where: { user_email: email }});
    
    let transporter = nodemailer.createTransport({ service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER, // gmail 계정 아이디를 입력
      pass: process.env.NODEMAILER_PASS, // gmail 계정의 비밀번호를 입력
    }
  });

  let mailOptions = {
    from: process.env.NODEMAILER_USER, // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: email, // 수신 메일 주소
    subject: "ZEROWAVE 임시 비밀번호 발송", // 제목
    html:
      "<h1 >ZEROWAVE에서 새로운 비밀번호를 알려드립니다.</h1> <h2> 임시비밀번호 : " +
      randomPassword +
      "</h2>" +
      '<h3 style="color: crimson;">임시 비밀번호로 로그인 하신 후, 반드시 비밀번호를 수정해 주세요.</h3>'};
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) { console.log(error); res.send("에러");} 
    else {
      console.log("Email sent: " + info.response);
      res.send({check: true, msg:"임시 비밀번호를 발송했습니다. 메일을 확인하세요."})}
    });
  }
}
