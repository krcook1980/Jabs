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
        constraints: false,
        onDelete: 'cascade',
    });
    }
  };
  Symptom.init({
    pain_at_site: DataTypes.BOOLEAN,
    fatigue: DataTypes.BOOLEAN,
    headache: DataTypes.BOOLEAN,
    muscle_soreness: DataTypes.BOOLEAN,
    joint_pain: DataTypes.BOOLEAN,
    nausea: DataTypes.BOOLEAN,
    vomiting: DataTypes.BOOLEAN,
    chills: DataTypes.BOOLEAN,
    swelling: DataTypes.BOOLEAN,
    rash: DataTypes.BOOLEAN,
    fever: DataTypes.BOOLEAN,
    severe_allergic_reaction: DataTypes.BOOLEAN,
    no_symptoms: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Symptom',
  });
  return Symptom;
};