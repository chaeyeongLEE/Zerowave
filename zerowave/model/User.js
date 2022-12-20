const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "user",
    {
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_pw: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
