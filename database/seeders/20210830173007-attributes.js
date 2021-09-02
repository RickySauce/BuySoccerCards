'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Attributes', [
      {
        type: 'rookieCard',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        type: 'autographed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'graded',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'numbered',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Attributes', null, {})
  }
};
