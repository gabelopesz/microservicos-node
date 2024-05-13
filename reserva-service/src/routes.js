const express = require('express');
const router = express.Router();
const reservasController = require('./reservasController');

/**
 * @openapi
 * /reservas:
 *   post:
 *     summary: Cria uma nova reserva
 *     description: Registra uma nova reserva no sistema.
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usuarioId
 *               - quartoId
 *               - dataInicio
 *               - dataFim
 *             properties:
 *               usuarioId:
 *                 type: integer
 *                 description: ID do usuário que faz a reserva.
 *               quartoId:
 *                 type: integer
 *                 description: ID do quarto reservado.
 *               dataInicio:
 *                 type: string
 *                 format: date
 *                 description: Data de início da reserva.
 *               dataFim:
 *                 type: string
 *                 format: date
 *                 description: Data de término da reserva.
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso.
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
 *                   example: "Reserva criada com sucesso."
 *                 reservaId:
 *                   type: integer
 *                   example: 1
 *   get:
 *     summary: Lista todas as reservas
 *     description: Retorna uma lista de todas as reservas registradas no sistema.
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Uma lista de reservas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   reservaId:
 *                     type: integer
 *                   usuarioId:
 *                     type: integer
 *                   quartoId:
 *                     type: integer
 *                   dataInicio:
 *                     type: string
 *                     format: date
 *                   dataFim:
 *                     type: string
 *                     format: date
 *
 * /reservas/{id}:
 *   get:
 *     summary: Obter detalhes de uma reserva
 *     description: Retorna detalhes de uma reserva específica pelo seu ID.
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da reserva.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalhes da reserva.
 *       404:
 *         description: Reserva não encontrada.
 *   delete:
 *     summary: Deleta uma reserva
 *     description: Remove uma reserva do sistema pelo seu ID.
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da reserva a ser deletada.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva deletada com sucesso.
 *       404:
 *         description: Reserva não encontrada.
 */
router.post('/', reservasController.criarReserva);
router.get('/', reservasController.listarReserva);
router.get('/:id', reservasController.getReserva);
router.delete('/:id', reservasController.deletarReserva);

module.exports = router;
