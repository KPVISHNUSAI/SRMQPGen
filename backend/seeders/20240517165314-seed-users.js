'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'jane_smith',
      email: 'jane@example.com',
      password: 'password456',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
