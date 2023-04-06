const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.store);
router.use(checkJwt({ secret: process.env.JWT_ADMIN_SECRET, algorithms: ["HS256"] }));
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
