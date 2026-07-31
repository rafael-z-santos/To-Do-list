const express = require("express");
const router = express.Router();

const listaController = require("../controllers/listaController");

router.get("/", listaController.listarListas);
router.post("/", listaController.criarLista);

module.exports = router;