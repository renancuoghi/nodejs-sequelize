const database = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Role = db.define('role', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
});

module.exports = Role;