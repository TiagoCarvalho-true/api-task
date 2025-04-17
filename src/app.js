// src/app.js
const express = require('express');
const tarefasRoutes = require('./routes/tarefasRoutes');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev')); // Logs no terminal
app.use('/tarefas', tarefasRoutes);

// Rota base
app.get('/', (req, res) => {
  res.send('API de Tarefas em funcionamento!');
});

// Tratamento de rota não encontrada
app.use((req, res) => {
  res.status(404).json({ mensagem: 'Rota não encontrada.' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
