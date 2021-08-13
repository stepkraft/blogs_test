const { DataTypes } = require('sequelize');
const { getInstance } = require('./db');
const sequelize = getInstance();

const Blog = sequelize.define('Blog', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  }
}, {});

module.exports = Blog;
