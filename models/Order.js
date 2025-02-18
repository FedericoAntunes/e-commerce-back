const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        total_price: {
          type: DataTypes.FLOAT,
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
  /*   toJSON = function () {
    const values = { ...this.get() };
    const user = values.user;

    delete user.password;
    delete values.payment_info;

    return values;
  }; */
}

module.exports = Order;
