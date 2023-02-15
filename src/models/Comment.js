const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');
const Article = require('./Article');

const Comment = db.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'created',
  updatedAt: false
});

Comment.belongsTo(Article, {
  foreignKey: {
    allowNull: false
  }
});

module.exports = Comment;
