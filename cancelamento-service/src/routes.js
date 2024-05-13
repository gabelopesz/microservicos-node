const express = require('express');
const router = express.Router();
const cancelamentoController = require('./cancelamentoController');

/**
 * @openapi
 * /reservas/{id}:
 *   delete:
 *     summary: Cancela uma reserva
 *     description: Cancela uma reserva pelo ID fornecido.
 *     tags: [Cancelamento]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único da reserva a ser cancelada.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva cancelada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucesso:
 *                   type: boolean
 *                   example: true
 *                 mensagem:
 *                   type: string
 *                   example: "Reserva deletada com sucesso."
 *       404:
 *         description: Reserva não encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucesso:
 *                   type: boolean
 *                   example: false
 *                 mensagem:
 *                   type: string
 *                   example: "Reserva não encontrada."
 *       500:
 *         description: Erro interno no servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucesso:
 *                   type: boolean
 *                   example: false
 *                 mensagem:
 *                   type: string
 *                   example: "Erro ao acessar o serviço de reservas."
 */
router.delete('/:id', cancelamentoController.cancelarReserva);

module.exports = router;
