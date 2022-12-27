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
        attributes: ['spot_name','address','map_email', 'filter'],
        required: true,
        where: {
          'map_email': req.session.user.email
        }
      },
    ],
    attributes: ['id'],
  });
  console.log(mylistMap);
  res.send(mylistMap);
};


exports.mypage_list_delete = async (req, res) => {
  console.log(req.body);
  const mylistDelete = await zwMap.destroy({where: {id: req.body.spotNumber}});
  console.log(mylistDelete);
  if(mylistDelete) {res.send(true);}
  else res.send(false);
}


// 즐겨찾기 리스트 보여주는 controller

exports.favList = async (req, res) => {
  const favList = await favorite.findAll({
    raw: true,
    where: {'Email': req.session.user.email},
    include: [
      {
        model: zwMap,
        as: 'fav',
        attributes: ['spot_name','address'],
        required: true
      }
    ],
    attributes: ['id'],
  });
  res.send(favList)
};


// 즐겨찾기 삭제 근데 map 에서도 실행되어야하는데 가능한지?????????

exports.favlist_delete = async (req, res) => {
  console.log(req.body);
  const favlistDelete = await favorite.destroy({where: {id: req.body.spotNumber}});
  console.log(favlistDelete);
  if(favlistDelete) {res.send(true);}
  else res.send(false);
}
