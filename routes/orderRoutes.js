const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.index);
router.get("/:slug", orderController.show);
router.post("/", orderController.store);

module.exports = router;
