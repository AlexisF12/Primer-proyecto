'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rol.init({
    rol:{type: DataTypes.STRING, unique:true, allowNull:false},
    activo:{type: DataTypes.BOOLEAN, allowNull:false}
  }, {
    sequelize,
    modelName: 'Rol',
    timestamps: false,
  });
  return Rol;
};