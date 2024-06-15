("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("place_amenities", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      place_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "places",
          },
          key: "id",
        },
      },
      amenity: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "amenities",
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
    await queryInterface.dropTable("place_amenities");
  },
};
