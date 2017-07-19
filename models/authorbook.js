'use strict';
module.exports = function(sequelize, DataTypes) {
  var AuthorBook = sequelize.define('AuthorBook', {
    AuthorId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return AuthorBook;
};