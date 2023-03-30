const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        payment_method: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        payment_info: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        
      },
      {
        sequelize,
        modelName: "order",
      },
    );
    return Order;
  }
}

module.exports = Order;
