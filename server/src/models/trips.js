"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trips.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      information: DataTypes.STRING,
      host: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Trips",
      tableName: "trips",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Trips;
};
