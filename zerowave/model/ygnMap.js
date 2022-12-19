const ygnMap = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "ygnMap",
    {
      spot_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    },
    {
      tableName: "ygnMap",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = ygnMap;
