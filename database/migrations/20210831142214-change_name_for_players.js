'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Players', 'name')
    await queryInterface.addColumn('Players', 'firstName', {type: Sequelize.STRING})
    await queryInterface.addColumn('Players', 'lastName', {type: Sequelize.STRING})
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
