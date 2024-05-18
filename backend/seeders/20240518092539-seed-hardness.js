'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Hardnesses', [
    //   { id: 1, type: 'easy', createdAt: new Date(), updatedAt: new Date() },
    //   { id: 2, type: 'moderate', createdAt: new Date(), updatedAt: new Date() },
    //   { id: 3, type: 'hard', createdAt: new Date(), updatedAt: new Date() }
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('Hardnesses', null, {});
  }
};