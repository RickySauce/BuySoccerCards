'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.changeColumn('Cards', 'year', {
     type: Sequelize.STRING
   })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
