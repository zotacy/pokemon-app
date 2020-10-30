'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlayerPokemons', {
      id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
      },
      playerId: {
			type: Sequelize.INTEGER,
			allowNull: false
      },
      pokemonId: {
			type: Sequelize.INTEGER,
			allowNull: false
      },
      createdAt: {
			allowNull: false,
			defaultValue: new Date(),
			type: Sequelize.DATE
      },
      updatedAt: {
			allowNull: false,
			defaultValue: new Date(),
			type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PlayerPokemons');
  }
};