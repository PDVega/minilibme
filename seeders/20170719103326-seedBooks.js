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
    title : 'Matlab Untuk Mahasiswa, Belajar Dari Berbagai Studi Kasus',
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    title : 'Konspirasi Alam Semesta',
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    title : 'Dasar-Dasar Endokrinologi',
    createdAt : new Date(),
    updatedAt : new Date()
  },
  {
    title : 'Words Their Way: Word Study for Phonics, Vocabulary, and Spelling Instruction',
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
