const express = require("express");

const router = express.Router();

const proyectosController = require("../controllers/proyectosController");

router.get('/', proyectosController.inicio);

module.exports = router;
