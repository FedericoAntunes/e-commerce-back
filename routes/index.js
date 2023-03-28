const publicRoutes = require("./publicRoutes");
const companyRoutes = require("./companyRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const authenticationRoutes = require("./authenticationRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use("/companies", companyRoutes);
  app.use("/products", productRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/users", userRoutes);
  app.use("/login", authenticationRoutes);

  app.use("/", publicRoutes);
};
