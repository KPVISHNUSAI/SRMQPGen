'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('Roles', [
    //   { id: 1, name: 'admin', createdAt: new Date(), updatedAt: new Date() },
    //   { id: 2, name: 'faculty', createdAt: new Date(), updatedAt: new Date() }
    // ]);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('Roles', null, {});
  }
};
