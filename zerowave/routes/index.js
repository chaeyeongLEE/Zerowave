let express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);
router.get('/map', controller.map);
router.get('/login', controller.login);
router.get('/join', controller.join);
router.get('/mypage', controller.mypage);

module.exports = router;
