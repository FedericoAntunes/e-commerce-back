require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require("cors");
const routes = require("./routes");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
