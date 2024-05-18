'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subjects', {
      subjectID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      subjectCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subjectName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

    await queryInterface.addIndex('Subjects', ['subjectCode'], {
      unique: true,
      name: 'subjectCode_unique_constraint'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Subjects');
  }
};
