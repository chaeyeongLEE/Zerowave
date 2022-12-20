const main = require('../model/index');

exports.main = (req, res) => {
  // if (req.session.user) res.render("main", {isLogin: true});
  // else res.render("main", {isLogin : false});
  res.render('main', req.result);
 };

exports.map = (req, res) => {
  res.render('map');
};


exports.mainC = (req, res) => {
  //req.params.type
  req.result["type"] = req.params.type;
  res.render(req.params.type, req.result);
};
