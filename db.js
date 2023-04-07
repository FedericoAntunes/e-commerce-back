const { Sequelize } = require("sequelize");
const db = require("./models");

const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};
if (process.env.DB_CONNECTION === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);

const dbSync = async () => {
  await db.sequelize.sync({ alter: true });
  console.log("[Database] ¡La estructura de tablas fue actualizada!");
};
dbSync();

module.exports = sequelize;
