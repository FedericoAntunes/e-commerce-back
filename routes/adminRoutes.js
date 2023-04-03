const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");

// router.get("/crear", adminController.create);
// router.get("/:id", adminController.show);
// router.get("/editar/:id", adminController.edit);
router.use(checkJwt({ secret: process.env.JWT_ADMIN_SECRET, algorithms: ["HS256"] }));
router.get("/", adminController.index);
router.post("/", adminController.store);
//router.patch("/:id", adminController.update);
//router.delete("/:id", adminController.destroy);

module.exports = router;
