const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@postgres:5432/${DB_NAME}`)
sequelize.sync();

module.exports = {
  init: async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  },
  getInstance: () => {
    return sequelize;
  }
};

