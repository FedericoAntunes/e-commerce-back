const { Sequelize } = require("sequelize");
/* const sequelize = require("../db"); */

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User");
const Admin = require("./Admin");
const Category = require("./Category");
const Product = require("./Product");
const Company = require("./Company");
const Order = require("./Order");
const OrderProduct = require("./OrderProduct");
const ShoppingCart = require("./ShoppingCart");
const ShoppingCartProducts = require("./ShoppingCartProducts");

User.initModel(sequelize);
Admin.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);
Company.initModel(sequelize);
Order.initModel(sequelize);
OrderProduct.initModel(sequelize);
ShoppingCart.initModel(sequelize);
ShoppingCartProducts.initModel(sequelize);
/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */

// 1 a N
Company.hasMany(Product);
Product.belongsTo(Company);

// N a N
ShoppingCart.belongsToMany(Product, { through: ShoppingCartProducts });
Product.belongsToMany(ShoppingCart, { through: ShoppingCartProducts });

// 1 a 1
User.hasOne(ShoppingCart);
ShoppingCart.belongsTo(User);

// N a N
Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product, { through: OrderProduct });

// 1 a N
User.hasMany(Order);
Order.belongsTo(User);

// 1 a N
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  sequelize,
  User,
  Admin,
  Category,
  Product,
  Company,
  Order,
  OrderProduct,
};
