const { Model, DataTypes } = require("sequelize");

class OrderProduct extends Model {
  static initModel(sequelize) {
    OrderProduct.init(
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
        unit_price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        product_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "orderProduct",
      },
    );
    return OrderProduct;
  }
}

module.exports = OrderProduct;
