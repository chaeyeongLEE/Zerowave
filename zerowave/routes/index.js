let express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get("/", controller.main);


module.exports = router;