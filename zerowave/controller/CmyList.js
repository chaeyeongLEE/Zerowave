const { zwMap } = require("../model"); // Model require
const { myList } = require("../model"); // Model require
const { Op } = require("sequelize"); // sequelize 조작어

exports.mypage_list = async (req, res) => {
  const mylistMap = await myList.findAll({
    raw: true,
    include: [
      {
        model: zwMap,
        as: 'zwMap',
        attributes: ['spot_name','address','map_email'],
        required: true,
        where: {
          'map_email': req.session.user.email
        }
      },
    ],
    attributes: ['id','memo'],
  });
  res.send(mylistMap)
};


exports.mypage_list_delete = async (req, res) => {
  const mylistDelete = await zwMap.destroy({where: {id: req.body.spotNumber}})
  if(mylistDelete) {res.send(true);}
  else res.send(false);
}