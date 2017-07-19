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
   return queryInterface.bulkInsert('Publishers', [{
     name : 'Falcon Publishing',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     name : 'GagasMedia',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     name : 'MediaKita',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     name : 'Rayyana Komunikasindo',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     name : 'Andi Publisher',
     createdAt : new Date(),
     updatedAt : new Date()
   },
   {
     name : 'Republika',
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