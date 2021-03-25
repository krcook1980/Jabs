var bcrypt = require("bcryptjs");
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Administrator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Administrator.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Administrator',
  });

  Administrator.prototype.validPassword = function(password) {
    return password===this.password;
    //return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // Administrator.addHook("beforeCreate", function(user) {
  //   admin.password = bcrypt.hashSync(admin.password, bcrypt.genSaltSync(10), null);
  // });
  return Administrator;
};