const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", companyController.index);
router.get("/:slug", companyController.show);
router.use(checkJwt({ secret: process.env.JWT_ADMIN_SECRET, algorithms: ["HS256"] }));
router.post("/", companyController.store);
router.patch("/:id", companyController.update);
router.delete("/:id", companyController.destroy);

module.exports = router;
