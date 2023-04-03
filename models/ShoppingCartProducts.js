const { Model, DataTypes } = require("sequelize");

class ShoppingCartProducts extends Model {
  static initModel(sequelize) {
    ShoppingCartProducts.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        qty: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "shoppingCartProducts",
      },
    );
    return ShoppingCartProducts;
  }
}

module.exports = ShoppingCartProducts;
