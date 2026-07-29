const express = require("express");
const router = express.Router();

const listaController = require("../controllers/listaController");

router.post("/", listaController.criarLista);

module.exports = router;