// role.js

const Sequelize = require('sequelize');
const sequelize = require('../db');

const Role = sequelize.define('role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    // Add more fields as needed
});

module.exports = Role;
