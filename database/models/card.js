'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Card.init({
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transactionId: DataTypes.INTEGER,
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    manufacturerId: {
     type: DataTypes.INTEGER,
     allowNull: false,
    },
    nationalityId: DataTypes.INTEGER,
    teamId:{
      tpye: DataTypes.INTEGER,
      allowNull: false
    },
    leagueId: 
      {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    year: { 
      type: DataTypes.INTEGER,
      allowNull: false
      //max value should be no more greater than the current year
      //will have to research the 'oldest' cards avaialable, the year should not predate that
    },
    price: {
      type: DataTypes.DECIMAL,
      min: 0.01
       // if forSale is false, price should be set to null
    },
    forSale: { //if presence of transactionId, forSale should be set to false
      type: DataTypes.BOOLEAN,
      defaultValue: true, 
    },
    frontImg: DataTypes.STRING,
    backImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};