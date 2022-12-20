let express = require('express');

const controller = require('../controller/Cmain');
const Cuser = require('../controller/Cuser');
const router = express.Router();
const port = 8000;

router.use('*', (req,res,next) => {
  if ( req.session.user ) req.result = {islogin: true};
  else req.result = {islogin: false};

  next();
});

router.get('/',  controller.main);

//router.get("/join", Cuser.join);
router.post("/join", Cuser.postJoin);

//router.get("/login",Cuser.login);
router.post("/login",Cuser.postLogin);
router.post("/logout",Cuser.postLogout);

router.post("/mypage", Cuser.mypage);
router.patch("/mypage", Cuser.mypage_edit);
router.delete("/mypage", Cuser.mypage_delete);


//router.get('/', controller.map);



router.get('/:type', controller.mainC);

module.exports = router;
