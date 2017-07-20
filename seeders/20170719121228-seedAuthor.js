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
   return queryInterface.bulkInsert('Authors', [{
     first_name : 'Ahmad',
     last_name : 'Fuadi',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     first_name : 'Radin',
     last_name : 'Azkia',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     first_name : 'Fiersa',
     last_name : 'Besari',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     first_name : 'Priyanto',
     last_name : 'Hidayatullah',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     first_name : 'Jauhari',
     last_name : 'Khairul Kawistara',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     first_name : 'Abdul',
     last_name : 'Kadir',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     first_name : 'Tere',
     last_name : 'Liye',
     createdAt : new Date(),
     updatedAt : new Date()
   }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Authors', null, {});
  }
};
