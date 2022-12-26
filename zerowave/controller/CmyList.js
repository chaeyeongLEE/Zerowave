const { zwMap } = require("../model"); // Model require
const { myList } = require("../model"); // Model require
const { Op } = require("sequelize"); // sequelize 조작어

exports.test = async (req, res) => {
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
    
    // where: {id = mylisttest.id}
  });
  res.send(mylistMap)
};
