const express = require("express");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController");

/**
 * Se sugiere usar este archivo para crear rutas relativas al proceso de
 * autenticación. Ejemplos: "/login" y "/logout".
 */
router.post("/", authenticationController.token);
router.post("/admin", authenticationController.tokenAdmin);
router.post("/google", authenticationController.googleAuth);

module.exports = router;
