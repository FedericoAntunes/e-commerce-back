const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", orderController.index);

router.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));
router.get("/lastOrder", orderController.show);
router.post("/", orderController.store);
router.get("/user", orderController.userOrders);

module.exports = router;
