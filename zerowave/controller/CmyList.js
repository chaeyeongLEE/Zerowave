const { zwMap } = require("../model"); // Model require
const { myList } = require("../model"); // Model require
const { favorite } = require("../model");

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
          //'map_email': req.session.user.email
        }
      },
    ],
    attributes: ['id'],
  });
  res.send(mylistMap)
};


exports.mypage_list_delete = async (req, res) => {
  console.log(req.body);
  const mylistDelete = await zwMap.destroy({where: {id: req.body.spotNumber}});
  console.log(mylistDelete);
  if(mylistDelete) {res.send(true);}
  else res.send(false);
}

// 즐겨찾기 지울 때는 destroy를 favorite db에서 실행한다 ~~ 왜냐면 zwmap은 변경되면 안되니까~