'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions', {
      questionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      questionString: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      images: {
        type: Sequelize.JSON
      },
      subject: {
        type: Sequelize.STRING
      },
      subjectCode: {
        type: Sequelize.STRING
      },
      examName: {
        type: Sequelize.STRING
      },
      unitName: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('questions');
  }
};

