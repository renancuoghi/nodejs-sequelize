const { Sequelize } = require('sequelize');
const config = require('../config.json');

const sequelize = new Sequelize(config.db.mysql.database, config.db.mysql.user, config.db.mysql.password, {
    host: config.db.mysql.host,
    dialect: config.db.mysql.dialect
  });

module.exports = sequelize;