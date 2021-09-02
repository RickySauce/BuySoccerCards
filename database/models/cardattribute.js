'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CardAttribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CardAttribute.belongsTo(Card, {
        foreignKey: 'cardId'
      })
      CardAttribute.belongsTo(Attribute, {
        foreignKey: 'attributeId'
      })
    }
  };
  CardAttribute.init({
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attributeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      type: DataTypes.FLOAT,
    },
  }, {
    sequelize,
    modelName: 'CardAttribute',
  });
  return CardAttribute;
};