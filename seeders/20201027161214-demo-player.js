'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
    "Players",
      [
        {
            name: 'Zach Tacy',
            username:'Zurono',
            password:'password',
            companion:'Squirtle',
            teamId: 1
        },
        {
            name: 'Spark',
            username:'Instinct_Leader',
            password:'Instinct',
            companion:'Venusaur',
            teamId: 2
        },
          {
            name: 'Blanche',
            username:'Mystic_Leader',
            password:'Mystic',
            companion:'Blastoise',
            teamId: 3
        },
          {
            name: 'Candela',
            username:'Valor_Leader',
            password:'Valor',
            companion:'Charizard',
            teamId: 4
        }
      ],
      {}
    );
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
