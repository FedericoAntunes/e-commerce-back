const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

//const Role = require("./Role");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        avatar: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    return User;
  }
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

module.exports = User;
