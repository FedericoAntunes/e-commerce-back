const { Model, DataTypes } = require("sequelize");

class Company extends Model {
  static initModel(sequelize) {
    Company.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        slug: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        logo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        background: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "company",
      },
    );
    return Company;
  }
}

module.exports = Company;
