'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Attributes', [
      {
        type: 'rookieCard' 
      }, 
      {
        type: 'autographed'
      },
      {
        type: 'graded'
      },
      {
        type: 'numbered'
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
  }
};
