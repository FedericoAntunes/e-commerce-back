const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", userController.index);
router.post("/", userController.store);
// router.get("/crear", userController.create);
// router.get("/:id", userController.show);
// router.get("/editar/:id", userController.edit);
router.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
