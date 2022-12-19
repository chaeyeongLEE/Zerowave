const { zwMap } = require("../model"); // db 불러오는 코드
const { Op } = require("sequelize"); // 시퀄라이즈 조작어

exports.index = (req,res) => { res.render("map"); }

exports.zwShopList = async(req,res) => {

    var currentLocate = {
        top: req.body.latlonData.swLat,
        left: req.body.latlonData.swLon,
        bottom: req.body.latlonData.neLat,
        right: req.body.latlonData.neLon   
    };

    var zwshopMap = await zwMap.findAll({
        raw: true,
        // where: { 
        //     lat : { [Op.between]: [currentLocate.top, currentLocate.bottom]},
        //     lon : { [Op.between]: [currentLocate.left, currentLocate.right]}
        // }
    });
    
    console.log("현재위치:", currentLocate);

    res.send(zwshopMap); 
}