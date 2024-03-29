'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Attribute.belongsToMany(Card, {through: CardAttribute})
    }
  };
  Attribute.init({
    type: {
      type: DataTypes.STRING,
      isIn: [['rookieCard', 'numbered', 'autographed', 'graded']],
      allowedNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'Attribute',
  });
  return Attribute;
};