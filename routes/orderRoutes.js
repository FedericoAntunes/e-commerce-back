const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");


router.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));
router.get("/", orderController.index);
router.get("/:slug", orderController.show);
router.post("/", orderController.store);

module.exports = router;
