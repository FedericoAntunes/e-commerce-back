const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const slugify = require("slugify");

//const Role = require("./Role");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT,
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
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
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
        reg_mode: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      // Email Slugify
      /* User.beforeCreate((user) => {
        user.email = user.email.replace(/[$%]/gi, "");
        user.email = slugify(user.email, {
          replacement: "-",
          trim: true,
          lower: true,
          strict: false,
        });
      }),
      // Hide Password in Store
       (User.prototype.toJSON = function () {
        const user = this.get();
        delete user.password;
        return user;
      }),*/
      // Bcrypt Password

      {
        sequelize,
        modelName: "user",
      },
    );

    User.beforeCreate(async function (user) {
      if (user.changed("password")) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    });

    return User;
  }
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};

module.exports = User;
