const express = require("express"); // express 모듈 불러오기
const app = express(); // 객체만들기(필요한 메소드가 app에 있다). app을 express()로 선언
const port = 8080; //포트설정

app.set('view engine', 'ejs') //ejs템플릿 설정. app에 view engine을 설정한다. ejs 확장자 파일은 view engine에 넣겠다.
app.use(express.static(__dirname + "views")); //static 파일은 views 디렉토리에서 가져온다.
app.use(express.static('public'));

app.get('/',(req, res)=>{
  res.render ("map");  // index.ejs 파일을 불러온다. view engine이 설정되어 있기 때문에
 });           

app.listen(port, () => {
    console.log('Server port : ', port);
});