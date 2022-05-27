const database = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const Role = require('./role');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate:{
            isEmail: {msg: "It must be a valid Email address"},
        }
    },    
});

User.belongsTo(Role);
Role.hasMany(User);
// User.associate = function(models) {
//     User.belongsTo(models.Role, {foreignKey: 'roleId', as: 'role'})
// };
/*User.hasOne(Role, {
    foreignKey: 'roleId'
});*/

module.exports = User;