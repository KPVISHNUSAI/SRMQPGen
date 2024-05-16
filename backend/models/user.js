// user.js

const Sequelize = require('sequelize');
const sequelize = require('../db');
const Role = require('./role');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // Define foreign key role_id
    roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    }
    // Add more fields as needed
});

// Define association to Role model
User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });

module.exports = User;
