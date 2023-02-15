const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');
const Comment = require('./Comment');

const Article = db.define('Article', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titre: {
    type: DataTypes.STRING(255),
    allowNull: false
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
Article.hasMany(Comment, {
  foreignKey:{
    allowNull: false,
    name: 'articleId'
  },
  sourceKey: 'id'
})


module.exports = Article;
