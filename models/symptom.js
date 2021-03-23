'use strict';
const Vaccine = require("./vaccine");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symptom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Symptom.belongsTo(models.Vaccine, {
        as: 'shot_id',
        foreignKey: 'current_shot_id',
        constraints: false,
        onDelete: 'cascade',
    });
    }
  };
  Symptom.init({
    symptom: DataTypes.STRING,
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Symptom',
  });
  return Symptom;
};