'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Leagues', [
     {
       name: 'bundesliga',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'la liga',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'ligue 1',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'premier league',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'serie a',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'uefa champions league',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ], {})
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Leagues', null, {})
  }
};
