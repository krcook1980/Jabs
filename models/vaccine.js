'use strict';
const Symptom = require("./symptom");
const User = require("./user");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaccine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Vaccine.belongsTo(models.User, {
        onDelete: 'cascade',
        
    });
    models.Vaccine.hasMany(models.Symptom);
    }
  };
  Vaccine.init({
    vaccine_type: DataTypes.STRING,
    shot_one: DataTypes.BOOLEAN,
    shot_two: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Vaccine',
    timestamps: false,
  },
  );
  return Vaccine;
};