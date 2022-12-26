const favorite = (Sequelize, DataTypes) => {
    return Sequelize.define(
      "favorite",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
  
        spot_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
  
        address: {
          type: DataTypes.TEXT,
          allowNull: false,
        },

        memo: {
            type: DataTypes.TEXT,
            allowNull:true,
        }
      },
  
      {
        tableName: "favorite",
        freezeTableName: true,
        timestamps: false,
      });
      
  };
  
  module.exports = favorite;
