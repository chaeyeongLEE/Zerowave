const { zwMap } = require("../model"); // db 불러오는 코드
const { Op } = require("sequelize"); // 시퀄라이즈 조작어

//exports.index = (req,res) => { res.render("map"); }

exports.zwShopList = async(req,res) => {

    console.log(req.body);

    var currentLocate = {
        top: req.body.swLat,
        left: req.body.swLng,
        bottom: req.body.neLat,
        right: req.body.neLng   
    };

    console.log(currentLocate);

    var zwshopMap = await zwMap.findAll({
        raw: true,
         where: { 
             lat : { [Op.between]: [currentLocate.top, currentLocate.bottom]},
             lon : { [Op.between]: [currentLocate.left, currentLocate.right]}
         }
    });
    
    res.send(zwshopMap); 
}