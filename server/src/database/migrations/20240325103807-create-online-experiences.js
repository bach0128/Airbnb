"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("online_experiences", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      exp_type: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "experiences-type",
          },
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
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
      information: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("online_experiences");
  },
};
