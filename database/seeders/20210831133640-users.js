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
   await queryInterface.bulkInsert('Users', [
     {
      username: 'admin',
      password: 'admin',
      lastName: 'admin',
      firstName: 'admin',
      email: 'admin@admin.com',
      admin: true,
      vendor: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      username: 'vendor',
      password: 'vendor',
      lastName: 'vendor',
      firstName: 'vendor',
      email: 'vendor@vendor.com',
      vendor: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      username: 'buyer',
      password: 'buyer',
      lastName: 'buyer',
      firstName: 'buyer',
      email: 'buyer@buyer.com',
      createdAt: new Date(),
      updatedAt: new Date()
     },
   ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
