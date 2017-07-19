'use strict';
module.exports = function(sequelize, DataTypes) {
  var AuthorBook = sequelize.define('AuthorBook', {
    AuthorId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    genre: DataTypes.STRING
  });
  
  AuthorBook.associate = models => {
    AuthorBook.belongsTo(models.Author);
    AuthorBook.belongsTo(models.Book);
  }
  return AuthorBook;
};
