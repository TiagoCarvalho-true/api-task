// src/services/tarefasService.js

const { v4: uuidv4 } = require('uuid');
const tarefas = require('../database/fakeDb');

function listarTarefas(filtroConcluida) {
  if (filtroConcluida !== undefined) {
    const concluida = filtroConcluida === 'true';
    return tarefas.filter(tarefa => tarefa.concluida === concluida);
  }
  return tarefas;
}

function buscarTarefaPorId(id) {
  return tarefas.find(tarefa => tarefa.id === id);
}

function adicionarTarefa(dados) {
  const novaTarefa = {
    id: uuidv4(),
    ...dados
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

function atualizarTarefa(id, novosDados) {
  const index = tarefas.findIndex(tarefa => tarefa.id === id);
  if (index === -1) return null;

  tarefas[index] = { ...tarefas[index], ...novosDados };
  return tarefas[index];
}

function concluirTarefa(id) {
  const tarefa = buscarTarefaPorId(id);
  if (!tarefa) return null;

  tarefa.concluida = true;
  return tarefa;
}

function deletarTarefa(id) {
    console.log('ID recebido para deletar:', id); // debug
    const index = tarefas.findIndex(t => t.id === id);
    console.log('Index encontrado:', index); // debug

    if (index === -1) return false;
  
    tarefas.splice(index, 1);
    return true;
  }
  

module.exports = {
  listarTarefas,
  buscarTarefaPorId,
  adicionarTarefa,
  atualizarTarefa,
  concluirTarefa,
  deletarTarefa
};
