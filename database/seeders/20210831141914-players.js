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
   await queryInterface.bulkInsert('Players', [
     {
       firstName: "jude",
       lastName: "bellingham",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       firstName: "zlatan",
       lastName: "ibrahimovic",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       firstName: "wesley",
       lastName: "sneijder",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       firstName: "erling",
       lastName: "haaland",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       firstName: "marcus",
       lastName: "rashford",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       firstName: "youssoufa",
       lastName: "moukoko",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       firstName: "christian",
       lastName: "pulisic",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       firstName: "bukayo",
       lastName: "saka",
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Players', null, {})
  }
};
