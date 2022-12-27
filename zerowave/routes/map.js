// routes > map.js map 메뉴의 제로웨이스트와 용기내 지도에 대한 라우팅 여기서 설정

const express = require("express");
const map = require("../controller/Cmap");
const router = express.Router();

router.use('*', (req,res,next) => {
    if ( req.session.user ) req.result = {islogin: true, sessionUser: req.session.user};
    else req.result = {islogin: false};
  
    next();
  });

//router.get("/", map.index);
router.post("/selectMap",map.selectMap);
router.post("/addPlaces",map.addPlaces);
router.post("/saveList",map.loadmySave);
router.post("/savePlaces",map.savePlaces);

module.exports = router;
