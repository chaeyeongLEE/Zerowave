const ygnMap = (Sequelize, DataTypes)=>{

  return Sequelize.define(
      "ygnMap",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },

        spot_name: { // name varchar(10) not null
              type: DataTypes.TEXT,
              allowNull: false
          },
  
          address: { // comment mediumtext 
              type: DataTypes.TEXT,
              allowNull: false
          },

          lat: {
              type: DataTypes.DOUBLE,
              allowNull: false
          },

          lon: {
              type: DataTypes.DOUBLE,
              allowNull: false
          },

          user_id: {
            type: DataTypes.STRING(45),
            allowNull: false
        }

      },

      {
        tableName: "ygnMap",
        freezeTableName: true,
        timestamps: false,
      }
    );
  };

module.exports = ygnMap;