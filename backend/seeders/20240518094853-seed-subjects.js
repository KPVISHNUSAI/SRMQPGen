'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('Subjects', [
    //   { subjectCode: '18CSC301T', subjectName: 'Formal Language Automata', createdAt: new Date(), updatedAt: new Date() },
    //   { subjectCode: '18CSC304J', subjectName: 'Compiler Design', createdAt: new Date(), updatedAt: new Date() }
    //   // Add more subjects as needed
    // ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('Subjects', null, {});
  }
};
