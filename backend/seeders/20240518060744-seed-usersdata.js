'use strict';

// 20240518060744-seed-usersdata.js

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('users', [
    //   {
    //     username: 'KPVishnuSai',
    //     email: 'kk4563@srmist.edu.in',
    //     password: 'password123',
    //     roleId: 1,
    //     dob: '2003-11-11',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     username: 'Uma Devi',
    //     email: 'uma@srmist.edu.in',
    //     password: 'password123',
    //     roleId: 2,
    //     dob: '1992-02-02',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     username: 'G.Malar Selvi',
    //     email: 'malarseg@srmist.edu.in',
    //     password: 'password123',
    //     roleId: 2,
    //     dob: '1998-02-02',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     username: 'Rajkamal',
    //     email: 'rajkamal@srmist.edu.in',
    //     password: 'password123',
    //     roleId: 2,
    //     dob: '1995-02-02',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ], {});
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('users', null, {});
  }
};