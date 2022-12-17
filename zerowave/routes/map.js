// routes > map.js map 메뉴의 제로웨이스트와 용기내 지도에 대한 라우팅 여기서 설정

const express = require("express");
const map = require("../controller/Cmap");
const router = express.Router();

router.get("/", map.index);
router.post("/zwshop", map.zwShopList);

module.exports = router;