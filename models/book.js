'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    PublisherId : DataTypes.INTEGER
  });
  
  Book.associate = models => {
    Book.belongsTo(models.Publisher);
    // Book.belongsToMany(models.Author, {
    //   through : 'AuthorBook'
    // })
  }
  return Book;
};
