'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerPokemon extends Model {
    static associate(models) {
      // define association here
    }
  };
  PlayerPokemon.init({
    playerId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlayerPokemon',
  });
  return PlayerPokemon;
};