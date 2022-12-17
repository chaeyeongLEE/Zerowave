const zwMap = (Sequelize, DataTypes)=>{

    return Sequelize.define(
        "zwMap",
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
            }
        },

        {
          tableName: "zwMap",
          freezeTableName: true,
          timestamps: false,
        }
      );
    };

module.exports = zwMap;