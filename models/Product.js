const { Model, DataTypes } = require("sequelize");
const slugify = require("slugify");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        slug: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        description: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
        featured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        image: {
          type: DataTypes.STRING(1000),
        },
        logo: { type: DataTypes.STRING(1000) },
      },
      {
        sequelize,
        modelName: "product",
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
    Product.beforeCreate(async function (product) {
      product.slug = await sluggy(product.title);
    });

    Product.beforeUpdate(async function (product) {
      if (product.changed("title")) {
        product.slug = await sluggy(product.title);
      }
    });
    return Product;
  }
}

module.exports = Product;
