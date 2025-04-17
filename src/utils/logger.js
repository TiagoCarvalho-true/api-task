// src/utils/logger.js

function logger(mensagem) {
    const timestamp = new Date().toISOString();
    console.log(`[LOG - ${timestamp}] ${mensagem}`);
  }
  
  module.exports = logger;
  