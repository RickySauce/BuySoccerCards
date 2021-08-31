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
   await queryInterface.bulkInsert('Leagues', [
     {
       name: 'bundesliga'
     },
     {
       name: 'la liga'
     },
     {
       name: 'ligue 1'
     },
     {
       name: 'premier league'
     },
     {
       name: 'serie a'
     },
     {
       name: 'uefa champions league'
     }
   ])
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
