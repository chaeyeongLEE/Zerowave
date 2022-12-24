const { zwMap } = require("../model"); // Model require
const { ygnMap } = require("../model"); 
const { Op } = require("sequelize"); // sequelize 조작어



// View 선택 값 조회

exports.selectMap = async(req, res) => {

    var currentLocate = { 
        top: req.body.swLat, bottom: req.body.neLat,
        left: req.body.swLng, right: req.body.neLng
    };

    let selectedVal = req.body.mapName;
    if(selectedVal == "default"){
        Promise.all([
            zwMap.findAll({ raw: true, where: {
                lat: { [Op.between]: [currentLocate.top, currentLocate.bottom]},
                lon: { [Op.between]: [currentLocate.left, currentLocate.right]}
            }}),
    
            ygnMap.findAll({ raw: true, where: {
                lat: { [Op.between]: [currentLocate.top, currentLocate.bottom]},
                lon: { [Op.between]: [currentLocate.left, currentLocate.right]}
            }})
        
        ]).then((result) => {
            let [zw, ygn] = result;
            let allList = [ ...zw, ...ygn ];
            res.send(allList);
        })
    }
    else if (selectedVal == "zero") {
        var zwmapList = await zwMap.findAll ({ raw: true, where: {
            lat: { [Op.between]: [currentLocate.top, currentLocate.bottom]},
            lon: { [Op.between]: [currentLocate.left, currentLocate.right]}
        }})
        res.send(zwmapList);
    }

    else if(selectedVal == "ygn") {
        var ygnList = await ygnMap.findAll ({ raw: true , where: {
            lat: { [Op.between]: [currentLocate.top, currentLocate.bottom]},
            lon: { [Op.between]: [currentLocate.left, currentLocate.right]}}})
        res.send(ygnList);
    };
}