const { zwMap } = require("../model"); // Model require
const { myList } = require("../model"); // Model require
const { favorite } = require("../model"); // Model require
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
};

// 장소 저장 시 실행 되는 controller 

exports.addPlaces = async(req,res) => {

    let selectedVal = req.body.mapName;

    const existingSpot = await zwMap.findOne({
        raw: true,
        where: { address: req.body.spot_address }
    });
    
    if (existingSpot) { res.send({ check: true, msg: "지도에 등록된 장소입니다." }); } 

    else {
        if (selectedVal == "zero") { 
            let data = { 
                spot_name : req.body.spot_name,
                address : req.body.spot_address,
                lat : req.body.y,
                lon : req.body.x,
                map_email : req.body.email,
                filter : 0
            }
            zwMap.create(data)
            .then((result) => {
                let mydata = { id : result.id, memo: req.body.memo };
                mylisttest.create(mydata)
            });
        }

    else if (selectedVal == "ygn") { 
            let data = {
                spot_name : req.body.spot_name,
                address : req.body.spot_address,
                lat : req.body.y,
                lon : req.body.x,
                map_email : req.body.email,
                filter : 1
            }
            zwMap.create(data)
            .then((result) => {
                let mydata = { id : result.id, memo: req.body.memo };
                mylisttest.create(mydata)
            });
        } 
    } res.send({ check: false, msg: "장소를 등록하였습니다." });
}
