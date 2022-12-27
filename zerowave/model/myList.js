const myList = (Sequelize, DataTypes) => {
    return Sequelize.define(
      "myList",
      {
        no: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
  
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
      },
  
      {
        tableName: "myList",
        freezeTableName: true,
        timestamps: false,
      });
      
  };
  
  module.exports = myList;
