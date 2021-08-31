'use strict';
const {
  Model, Sale
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsTo(User, {
        foreignKey: 'vendorId'
      })
      Card.belongsTo(Sale)
      Card.hasOne(Review)
      Card.belongsTo(Player, {
        foreignKey: 'playerId'
      })
      Card.belongsTo(Manufacturer, {
        foreignKey: 'manufacturerId'
      })
      Card.belongsTo(Team, {
        foreignKey: 'teamId'
      })
      Card.belongsTo(League, {
        through: Team
      })
      Card.hasMany(Attribute, {
        through: CardAttribute
      })
    }
  };
  Card.init({
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saleId: DataTypes.INTEGER,
    playerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manufacturerId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER,
    year: { 
      type: DataTypes.STRING,
      allowNull: false
      //max value should be no more greater than the current year
      //will have to research the 'oldest' cards avaialable, the year should not predate that
    },
    salePrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      min: 0.01
    },
    price: {
      type: DataTypes.DECIMAL,
      min: 0.01
       // if available is false, price should be set to null
    },
    available: { //if presence of saleId, available should be set to false
      type: DataTypes.BOOLEAN,
      defaultValue: true, 
    },
    frontImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backImg: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};