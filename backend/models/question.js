const Sequelize = require('sequelize');
const sequelize = require('../db');

const Question = sequelize.define('question', {
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
    }
});

module.exports = Question;
