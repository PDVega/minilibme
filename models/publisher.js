'use strict';
module.exports = function(sequelize, DataTypes) {
  var Publisher = sequelize.define('Publisher', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Publisher;
};