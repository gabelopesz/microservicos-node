const express = require('express');
const router = express.Router();
const reservasController = require('./reservasController');

router.post('/', reservasController.criarReserva);
router.get('/', reservasController.listarReserva);
router.get('/:id', reservasController.getReserva);
router.delete('/:id', reservasController.deletarReserva);

module.exports = router;
