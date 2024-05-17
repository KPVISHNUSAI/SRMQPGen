// seeders/20240518120000-questions-seed.js

'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define the seed data for Questions
    const questionsData = [
      {
        questionString: 'Sample Question 1',
        images: ['image1.jpg', 'image2.jpg'],
        subject: 'Math',
        subjectCode: 'MATH101',
        examName: 'Final Exam',
        unitName: 'Algebra'
      },
      {
        questionString: 'Sample Question 2',
        images: ['image3.jpg'],
        subject: 'Science',
        subjectCode: 'SCI102',
        examName: 'Midterm Exam',
        unitName: 'Physics'
      },
      // Add more seed data as needed
    ];

    // Use bulkCreate to insert seed data into the Questions table
    await queryInterface.bulkCreate('questions', questionsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data from the Questions table
    await queryInterface.bulkDelete('questions', null, {});
  }
};
