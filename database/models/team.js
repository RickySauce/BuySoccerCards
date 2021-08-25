'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Team.init({
    leagueId: DataTypes.INTEGER, //if nationalTeam is false then require leagueId
    name: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationalTeam: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};