'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Cards', [
     {
      vendorId: 1,
      description: "description",
      playerId: 1,
      manufacturerId: 2,
      year: "2020-2021",
      price: 450.00,
      frontImg: '/public/imgs/seeds/jude_bellingham_1_front.jpeg',
      backImg: '/public/imgs/seeds/jude_bellingham_1_front.jpeg'
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
