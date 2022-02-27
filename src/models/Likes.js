const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/connection')

const Likes = sequelize.define('likes', {
  // Model 
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  movie: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'dt_update'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'dt_create'
  }
}, {
  //Outros models
});
module.exports = Likes