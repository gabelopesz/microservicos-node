const express = require('express');
const router = express.Router();
const cancelamentoController = require('./cancelamentoController');

router.delete('/:id', cancelamentoController.cancelarReserva);

module.exports = router;
