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
          type: DataTypes.STRING(1500),
          allowNull: false,
        },
        featured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        image: {
          type: DataTypes.STRING(1500),
        },
        logo: { type: DataTypes.STRING(1500) },
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
      product.price = await product.price.toFixed(2);
    });

    Product.beforeBulkCreate(async function (products) {
      for (const product of products) {
        product.slug = await sluggy(product.title);
        product.price = await product.price.toFixed(2);
      }
    });

    Product.beforeUpdate(async function (product) {
      if (product.changed("title")) {
        product.slug = await sluggy(product.title);
      }
      if (product.changed("price")) {
        product.price = await product.price.toFixed(2);
      }
    });

    return Product;
  }
}

module.exports = Product;
