// src/controllers/tarefasController.js

const tarefaService = require('../services/tarefasService');
const logger = require('../utils/logger');

function listarTarefas(req, res) {
  const { concluida } = req.query;
  const tarefas = tarefaService.listarTarefas(concluida);
  res.status(200).json(tarefas);
}

function buscarTarefa(req, res) {
  const { id } = req.params;
  const tarefa = tarefaService.buscarTarefaPorId(id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }

  res.status(200).json(tarefa);
}

function criarTarefa(req, res) {
  const novaTarefa = tarefaService.adicionarTarefa(req.body);
  logger('Tarefa criada com sucesso.');
  res.status(201).json(novaTarefa);
}

function atualizarTarefa(req, res) {
  const { id } = req.params;
  const tarefaAtualizada = tarefaService.atualizarTarefa(id, req.body);

  if (!tarefaAtualizada) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }

  logger(`Tarefa ${id} atualizada.`);
  res.status(200).json(tarefaAtualizada);
}

function concluirTarefa(req, res) {
  const { id } = req.params;
  const tarefaConcluida = tarefaService.concluirTarefa(id);

  if (!tarefaConcluida) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }

  logger(`Tarefa ${id} marcada como concluída.`);
  res.status(200).json(tarefaConcluida);
}

function deletarTarefa(req, res) {
    const { id } = req.params;
    const sucesso = tarefaService.deletarTarefa(id);
  
    if (!sucesso) {
      return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
    }
  
    logger(`Tarefa ${id} deletada.`);
    res.status(204).send(); // sem body
  }
  
module.exports = {
  listarTarefas,
  buscarTarefa,
  criarTarefa,
  atualizarTarefa,
  concluirTarefa,
  deletarTarefa
};
