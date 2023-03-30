const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", categoryController.index);
router.get("/:slug", categoryController.show);

module.exports = router;
