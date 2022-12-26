const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/index.js")[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

db.User = require("./User")(sequelize, Sequelize);
db.zwMap = require("./zwMap")(sequelize, Sequelize);
db.myList = require("./myList")(sequelize, Sequelize);

db.zwMap.associate = function(db) {
  db.zwMap.hasMany(db.myList, {
    foreignKey: 'id', sourceKey: 'id', 
    onDelete: 'cascade', onUpdate: 'cascade'})
};

db.myList.associate = function(db) {
  db.myList.belongsTo(db.zwMap, {
    foreignKey: 'id', sourceKey: 'id', 
    onDelete: 'cascade', onUpdate: 'cascade'})
};



// 사용할 테이블 추가로 생길 때마다 .js파일로 테이블정의하고, 19번줄 처럼 추가 해 주면 됨


  // db.User.hasMany(db.ygnMap, {
  //   foreignKey: "user_email",
  //   sourceKey: "user_email",
  //   onDelete: 'cascade',
  // });

  // db.ygnMap.belongsTo(db.User, {
  //   foreignKey: 'user_email',
  //   sourceKey: "user_email",
  //   onDelete: 'cascade'
  // });
