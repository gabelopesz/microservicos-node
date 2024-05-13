const express = require('express');
const router = express.Router();
const buscaController = require('./buscaController');

router.get('/buscarHoteis', buscaController.buscarHoteis);
router.get('/listarCidades', buscaController.listaCidades);
router.get('/disponibilidade', buscaController.disponibilidadePorLocalizacao);

/**
 * @openapi
 * /buscarHoteis:
 *   get:
 *     summary: Retorna uma lista de hotéis disponíveis
 *     description: Busca hotéis por data e localização, retornando os disponíveis.
 *     parameters:
 *       - in: query
 *         name: data
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: Data para a qual a disponibilidade deve ser verificada.
 *       - in: query
 *         name: localização
 *         schema:
 *           type: string
 *         required: true
 *         description: Localização dos hotéis para filtrar a busca.
 *     responses:
 *       200:
 *         description: Lista de hotéis disponíveis.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nome:
 *                     type: string
 *                     description: Nome do hotel.
 *                   disponibilidade:
 *                     type: boolean
 *                     description: Disponibilidade do hotel na data selecionada.
 *                   cidade:
 *                     type: string
 *                     description: Cidade onde o hotel está localizado.
 *       400:
 *         description: Parâmetros de entrada inválidos.
 * 
 * /listarCidades:
 *   get:
 *     summary: Lista todas as cidades com hotéis disponíveis
 *     description: Retorna uma lista única de todas as cidades onde existem hotéis listados.
 *     responses:
 *       200:
 *         description: Uma lista de cidades.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: Nome da cidade.
 * 
 * /disponibilidade:
 *   get:
 *     summary: Verifica a disponibilidade de hotéis por localização
 *     description: Retorna o status de disponibilidade dos hotéis em uma determinada cidade.
 *     parameters:
 *       - in: query
 *         name: localização
 *         schema:
 *           type: string
 *         required: true
 *         description: A cidade para verificar a disponibilidade dos hotéis.
 *     responses:
 *       200:
 *         description: Estado de disponibilidade dos hotéis na cidade.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 disponibilidade:
 *                   type: string
 *                   description: Mostra se hotéis estão disponíveis, parcialmente disponíveis ou não disponíveis.
 */

module.exports = router;
