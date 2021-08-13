const { DataTypes } = require('sequelize');
const { getInstance } = require('./db');
const sequelize = getInstance();
const Blog = require('./blog');

const Comment = sequelize.define('Comment', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
  }
}, {});

Comment.belongsTo(Blog);
Blog.hasMany(Comment);

module.exports = Comment;
