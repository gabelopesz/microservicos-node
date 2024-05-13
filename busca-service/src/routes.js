const express = require('express');
const router = express.Router();
const buscaController = require('./buscaController');

router.get('/buscarHoteis', buscaController.buscarHoteis);
router.get('/listarCidades', buscaController.listaCidades);
router.get('/disponibilidade', buscaController.disponibilidadePorLocalizacao);


module.exports = router;
