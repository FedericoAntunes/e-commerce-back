const { Model, DataTypes } = require("sequelize");

class ShoppingCart extends Model {
  static initModel(sequelize) {
    ShoppingCart.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "shoppingCart",
      },
    );
    return ShoppingCart;
  }
}

module.exports = ShoppingCart;
