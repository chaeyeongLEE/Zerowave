// routes > map.js map 메뉴의 제로웨이스트와 용기내 지도에 대한 라우팅 여기서 설정

const express = require("express");
const map = require("../controller/Cmap");
const map2 = require("../controller/Cmap2");
const router = express.Router();

router.get("/", map.index);
router.post("/zwshop", map.zwShopList);

router.get("/ygn", map2.ygnIndex);
router.post("/ygn", map2.ygnShopList);

module.exports = router;
