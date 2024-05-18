'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Units', [
      { unitNo: 'unit-1', createdAt: new Date(), updatedAt: new Date() },
      { unitNo: 'unit-2', createdAt: new Date(), updatedAt: new Date() },
      { unitNo: 'unit-3', createdAt: new Date(), updatedAt: new Date() },
      { unitNo: 'unit-4', createdAt: new Date(), updatedAt: new Date() },
      { unitNo: 'unit-5', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Units', null, {});
  }
};
