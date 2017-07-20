'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Books', [{
    title : 'Anak Rantau',
    createdAt : new Date(),
    updatedAt : new Date()
   },
  {
    title : 'Feel Real',
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    title : 'Konspirasi Alam Semesta',
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    title : 'Pemrograman Web ( HTML/CSS/JavaScript/Power Designer/XAMPP/PHP/Codelgniter/Jquery )',
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    title : 'From Zero To A Pro: Java Script Dan jQuery ',
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    title : 'Harga Sebuah Percaya',
    createdAt : new Date(),
    updatedAt : new Date()
  }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Books', null, {})
  }
};
