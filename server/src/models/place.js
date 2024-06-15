"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Place.belongsTo(models.Place_type_lists, {
        foreignKey: "place_type",
        as: "place_type_lists",
      });
    }
  }
  Place.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      place_type: DataTypes.STRING,
      national: DataTypes.STRING,
      address: DataTypes.STRING,
      price: DataTypes.STRING,
      host: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Place",
      tableName: "places",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Place;
};
