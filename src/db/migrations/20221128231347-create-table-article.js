"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("article", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subtitle: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      theme_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "theme",
          key: "id",
        },
      },
      file_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "file",
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("now()"),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      removed_at: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("article");
  },
};
