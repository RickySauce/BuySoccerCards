'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Manufacturers', [
      {
        name: 'Merlin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Topps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Panini',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Topps Now',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Manufacturers', null, {})
  }
};
