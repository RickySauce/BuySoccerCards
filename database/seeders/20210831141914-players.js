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
     },
     {
       firstName: "zlatan",
       lastName: "ibrahimovic"
     },
     {
       firstName: "wesley",
       lastName: "sneijder"
     },
     {
       firstName: "erling",
       lastName: "haaland"
     },
     {
       firstName: "marcus",
       lastName: "rashford"
     },
     {
       firstName: "youssoufa",
       lastName: "moukoko"
     },
     {
       firstName: "christian",
       lastName: "pulisic"
     },
     {
       firstName: "bukayo",
       lastName: "saka"
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
