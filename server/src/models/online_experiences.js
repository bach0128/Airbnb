"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Online_experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Online_experience.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      exp_type: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      host: DataTypes.INTEGER,
    },
    {
      // options
      sequelize,
      modelName: "Online_experience",
      tableName: "online_experiences",
      createdAt: "created_at",
      updatedAt: "updated_at",
      // paranoid: true, // Kich hoat xoa mem (timestamps: true)
    }
  );
  return Online_experience;
};
