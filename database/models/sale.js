'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sale.belongsTo(User, {
        foreignKey: 'vendorId'
      })
      Sale.belongsTo(User, {
        foreignKey: 'buyerId'
      })
      Sale.hasOne(Card)
    }
  };
  Sale.init({
    vendorId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    buyerId: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};