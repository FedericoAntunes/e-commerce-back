const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.index);
router.get("/:slug", companyController.show);
router.delete("/:id", companyController.destroy);

module.exports = router;
