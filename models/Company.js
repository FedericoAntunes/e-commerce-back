const { Model, DataTypes } = require("sequelize");
const slugify = require("slugify");

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
        valoration: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: "company",
      },
    );
    function sluggy(name) {
      return slugify(name, {
        replacement: "-",
        trim: true,
        lower: true,
        strict: true,
      });
    }

    Company.beforeCreate(async function (company) {
      company.slug = await sluggy(company.name);
    });

    Company.beforeUpdate(async function (company) {
      if (company.changed("name")) {
        company.slug = await sluggy(company.name);
      }
    });
    return Company;
  }
}

module.exports = Company;
