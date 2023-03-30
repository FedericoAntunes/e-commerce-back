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
        description: {
          type: DataTypes.STRING(2000),
          allowNull: false,
          defaultValue: "description",
        },
        estimated_time: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: `20–35 min • $1.49 Delivery Fee • $ `,
        },

        logo: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        background: {
          type: DataTypes.STRING(1000),
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
