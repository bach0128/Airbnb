"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("places", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(200),
      },
      place_type: {
        type: Sequelize.STRING(30),
        unique: true,
      },
      national: {
        type: Sequelize.STRING(50),
      },
      address: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING(30),
      },
      host: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "hosts",
          },
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("places");
  },
};
