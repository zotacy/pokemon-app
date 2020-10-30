'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pokemons",
      [
        {
          name: "Bulbasaur",
          img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ivysaur",
          img: "http://img.pokemondb.net/artwork/ivysaur.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Venusaur",
          img: "http://img.pokemondb.net/artwork/venusaur.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charmander",
          img: "http://img.pokemondb.net/artwork/charmander.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charmeleon",
          img: "https://img.pokemondb.net/artwork/charmeleon.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charizard",
          img: "http://img.pokemondb.net/artwork/charizard.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Squirtle",
          img: "http://img.pokemondb.net/artwork/squirtle.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wartortle",
          img: "http://img.pokemondb.net/artwork/wartortle.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blastoise",
          img: "http://img.pokemondb.net/artwork/blastoise.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
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
