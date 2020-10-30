'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
      Player.belongsTo(models.Team, { foreignKey: 'teamId' })
      Player.belongsToMany(models.Pokemon, {
        through: 'PlayerPokemon',
        foreignKey: 'playerId',
        otherKey: 'pokemonId'
      });
  };
  };
  Player.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    companion: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};