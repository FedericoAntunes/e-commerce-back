const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.index);
router.get("/:id", companyController.show);

module.exports = router;
