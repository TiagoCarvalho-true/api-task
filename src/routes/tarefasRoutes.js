// src/routes/tarefasRoutes.js

const express = require('express');
const router = express.Router();

const controller = require('../controllers/tarefasController');
const validateTarefa = require('../middlewares/validateTarefa');

// Lista todas as tarefas (com ou sem filtro ?concluida=true/false)
router.get('/', controller.listarTarefas);

// Retorna uma tarefa específica
router.get('/:id', controller.buscarTarefa);

// Cria nova tarefa com validação
router.post('/', validateTarefa, controller.criarTarefa);

// Atualiza todos os campos de uma tarefa com validação
router.put('/:id', validateTarefa, controller.atualizarTarefa);

// Marca tarefa como concluída
router.patch('/:id/concluir', controller.concluirTarefa);

// Deleta uma tarefa
router.delete('/:id', controller.deletarTarefa);

module.exports = router;
