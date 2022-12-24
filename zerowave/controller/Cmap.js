const { zwMap } = require("../model"); // Model require
const { Op } = require("sequelize"); // sequelize 조작어


// View 선택 값 조회

exports.selectMap = async(req, res) => {

    var currentLocate = { 
        top: req.body.swLat, bottom: req.body.neLat,
        left: req.body.swLng, right: req.body.neLng
    };

    let selectedVal = req.body.mapName;
    if(selectedVal == "default"){
        var allList = await zwMap.findAll ({ raw: true, where: {
            lat: { [Op.between]: [currentLocate.top, currentLocate.bottom]},
            lon: { [Op.between]: [currentLocate.left, currentLocate.right]}
        }})
        res.send(allList);
    }
    else if (selectedVal == "zero") {
        var zwmapList = await zwMap.findAll ({ raw: true, where: {
            filter : 0,
            lat: { [Op.between]: [currentLocate.top, currentLocate.bottom]},
            lon: { [Op.between]: [currentLocate.left, currentLocate.right]}
        }})
        res.send(zwmapList);
    }

    else if(selectedVal == "ygn") {
        var ygnList = await zwMap.findAll ({ raw: true , where: {
            filter : 1,
            lat: { [Op.between]: [currentLocate.top, currentLocate.bottom]},
            lon: { [Op.between]: [currentLocate.left, currentLocate.right]}}})
        res.send(ygnList);
    };
}