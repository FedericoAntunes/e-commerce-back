const publicRoutes = require("./publicRoutes");
const companyRoutes = require("./companyRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const searchRoutes = require("./searchRoutes");
const authenticationRoutes = require("./authenticationRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/companies", companyRoutes);
  app.use("/products", productRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/users", userRoutes);
  app.use("/search", searchRoutes);
  app.use("/tokens", authenticationRoutes);

  app.use("/", publicRoutes);
};
