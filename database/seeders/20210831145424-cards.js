'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Cards', [
     {
      vendorId: 1,
      description: "2020-21 Topps Chrome UEFA Champions League Jude Bellingham Aqua Wave Refractor /199 #68 SGC 9.5",
      playerId: 1,
      manufacturerId: 2,
      year: "2020-2021",
      price: 450.00,
      frontImg: '/public/imgs/seeds/jude_bellingham_1_front.jpeg',
      backImg: '/public/imgs/seeds/jude_bellingham_1_back.jpeg'
     },
     {
      vendorId: 1,
      description: "2020-21 Panini Mosaic Serie A Asia Edition Soccer Zlatan Ibrahimovic Peacock Prizm #1",
      playerId: 2,
      manufacturerId: 3,
      year: "2020-2021",
      price: 450.00,
      frontImg: '/public/imgs/seeds/zlatan_ibrahimovic_1_front.jpeg',
      backImg: '/public/imgs/seeds/zlatan_ibrahimovic_1_back.jpeg'
     },
     {
      vendorId: 2,
      description: "2020-21 Panini Mosaic UEFA Euro 2020 Wesley Sneijder Choice Black Gold Autograph #AM-WS",
      playerId: 3,
      manufacturerId: 3,
      year: "2020-2021",
      price: 350.00,
      frontImg: '/public/imgs/seeds/wesley_sneijder_1_front.jpeg',
      backImg: '/public/imgs/seeds/wesley_sneijder_1_back.jpeg'
     },
     {
      vendorId: 2,
      description: "2020 Topps Now Bundesliga Erling Haaland Rookie Card #99 'Hat-Trick On Bundesliga Debut' PR487",
      playerId: 4,
      manufacturerId: 4,
      year: "2020",
      price: 300.00,
      frontImg: '/public/imgs/seeds/erling_haaland_1_front.jpeg',
      backImg: '/public/imgs/seeds/erling_haaland_1_back.jpeg'
     },
     {
      vendorId: 2,
      description: "2018 Panini World Cup Stickers Marcus Rashford #590 PSA 10",
      playerId: 5,
      manufacturerId: 3,
      year: "2018",
      price: 299.99,
      frontImg: '/public/imgs/seeds/marcus_rashford_1_front.jpeg',
      backImg: '/public/imgs/seeds/marcus_rashford_1_back.jpeg'
     },
     {
      vendorId: 2,
      description: "2020-21 Topps Chrome UEFA Champions League Youssoufa Moukoko Refractor #55 SGC 10",
      playerId: 6,
      manufacturerId: 2,
      year: "2020-2021",
      price: 275.00,
      frontImg: '/public/imgs/seeds/youssoufa_moukoko_1_front.jpeg',
      backImg: '/public/imgs/seeds/youssoufa_moukoko_1_back.jpeg'
     },
     {
      vendorId: 2,
      description: "2019 Topps Now Bundesliga Christian Pulisic #119 'Goal In Last Home Game' PR76",
      playerId: 7,
      manufacturerId: 4,
      year: "2019",
      price: 275.00,
      frontImg: '/public/imgs/seeds/christian_pulisic_1_front.jpeg',
      backImg: '/public/imgs/seeds/christian_pulisic_1_back.jpeg'
     },
     {
      vendorId: 2,
      description: "2020-21 Topps Chrome UEFA Champions League Jude Bellingham Refractor #68 SGC 10",
      playerId: 1,
      manufacturerId: 2,
      year: "2020-2021",
      price: 265.00,
      frontImg: '/public/imgs/seeds/jude_bellingham_2_front.jpeg',
      backImg: '/public/imgs/seeds/jude_bellingham_2_back.jpeg'
     },
     {
      vendorId: 2,
      description: "2020-21 Obsidian Soccer Red Pulsar /28 Bukayo Saka Supernova #9",
      playerId: 8,
      year: "2020-2021",
      price: 258.00,
      frontImg: '/public/imgs/seeds/bukayo_saka_1_front.jpeg',
      backImg: '/public/imgs/seeds/bukayo_saka_1_back.jpeg'
     },
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
