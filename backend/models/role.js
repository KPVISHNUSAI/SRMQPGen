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

const roles = [
    { name: 'admin' },
    { name: 'faculty' }
];

// Create roles in the database
const createRoles = async () => {
    try {
        // Loop through roles and create them
        for (const role of roles) {
            await Role.findOrCreate({ where: role });
        }
        console.log('Roles created successfully');
    } catch (error) {
        console.error('Error creating roles:', error);
    }
};

// Call the function to create roles
createRoles();

module.exports = Role;
