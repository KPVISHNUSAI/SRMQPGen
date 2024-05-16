// db.js

const Sequelize = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize('my-express-app', 'root', 'Vish@1111', {
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
        debug: true
    }
});

sequelize.sync({ force: false }) // Set force to true to drop existing tables and re-create them
.then(() => {
    console.log('Database synced successfully');
})
.catch(err => {
    console.error('Error syncing database:', err);
});

module.exports = sequelize;
