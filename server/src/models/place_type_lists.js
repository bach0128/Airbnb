"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Place_type_lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Place_type_lists.hasMany(models.Place, {
        foreignKey: "place_type",
        as: "places",
      });
    }
  }
  Place_type_lists.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      place_type: DataTypes.STRING,
      place_icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Place_type_lists",
      tableName: "place_type_lists",
      createdAt: "created_at",
      updatedAt: "updated_at",
      // paranoid: true, // Kich hoat xoa mem (timestamps: true)
    }
  );
  return Place_type_lists;
};
