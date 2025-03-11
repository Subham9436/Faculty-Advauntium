const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance for MySQL
const sequelize = new Sequelize('faculty_db', 'root', '0YNXh5!aC8@h9NeG', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

// Import models
const Faculty = require('./faculty')(sequelize, Sequelize.DataTypes);

// Export the models and sequelize instance
module.exports = {
    sequelize,
    Faculty
};