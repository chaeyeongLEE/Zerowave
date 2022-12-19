const { ygnMap } = require("../model");

exports.ygnIndex = (req, res) => {
  res.render("map2");
};

exports.ygnShopList = async (req, res) => {
  const spot_name = req.body.data.spot_name;
  const address = req.body.data.address;
  let data = {
    spot_name: spot_name,
    address: address,
  };
  console.log(data);
  let result = await ygnMap.create(data);
  console.log(result);
  res.send(true);
};
