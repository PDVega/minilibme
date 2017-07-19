'use strict';
module.exports = function(sequelize, DataTypes) {
  var Publisher = sequelize.define('Publisher', {
    name: DataTypes.STRING
  });
  
  Publisher.associate = models => {
    Publisher.hasMany(models.Book);
  }
  return Publisher;
};
