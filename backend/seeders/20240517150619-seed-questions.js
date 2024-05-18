'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        questionString: "Write the regular expression for the following language.Set of strings over alphabet {a, b, c} containing atleast one 'a' followed by atleast one 'b'followed by atleast one 'c'.",
        images: null,
        subjectId: 1, 
        typeId: 1,    
        unitId: 1,    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionString: "RE = (a+b)*+(a.c)* Convert it into DFA in direct method",
        images: null,
        subjectId: 2,
        typeId: 3,
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
