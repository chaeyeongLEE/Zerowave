let express = require("express");

const controller = require("../controller/Cmain");
const Cuser = require("../controller/Cuser");
const Cemail = require("../controller/Cemail");
const CmyList = require("../controller/CmyList");
const router = express.Router();
const nodemailer = require("nodemailer");
const port = 8000;

router.use("*", (req, res, next) => {
  if (req.session.user)
    req.result = { islogin: true, sessionUser: req.session.user };
  else req.result = { islogin: false };

  next();
});

router.get("/", controller.main);

router.post("/join", Cuser.postJoin);

router.post("/login", Cuser.postLogin);
router.post("/logout", Cuser.postLogout);

router.post("/forgot", Cemail.email);

router.post("/mypage", Cuser.mypage);
router.delete("/mypage", Cuser.mypage_delete);

router.post("/mypage-user", Cuser.passwordCheck);
router.patch("/mypage-edit", Cuser.mypage_edit);

router.post("/mypage-list", CmyList.mypage_list);
router.delete("/mypage-list", CmyList.mypage_list_delete);

router.post("/mypage-fav", CmyList.favList);
router.delete("/mypage-fav", CmyList.favlist_delete);
router.delete("/favlist", CmyList.favlist_delete);



router.get('/:type', controller.mainC);

module.exports = router;
