const favorite = (Sequelize, DataTypes) => {
    return Sequelize.define(
      "favorite",
      {
        Number: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
         
        },
        memo: {
            type: DataTypes.TEXT,
            allowNull:true,
        },
        Email: {
          type: DataTypes.STRING(255),
          allowNull:false,
        }
      },
  
      {
        tableName: "favorite",
        freezeTableName: true,
        timestamps: false,
      });
      
  };
  
  module.exports = favorite;
