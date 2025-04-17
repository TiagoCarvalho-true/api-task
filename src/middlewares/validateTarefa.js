// src/middlewares/validateTarefa.js

const Joi = require('joi');

const schemaTarefa = Joi.object({
  titulo: Joi.string().min(3).required().messages({
    'string.base': `"titulo" deve ser um texto`,
    'string.empty': `"titulo" não pode estar vazio`,
    'string.min': `"titulo" deve ter pelo menos 3 caracteres`,
    'any.required': `"titulo" é obrigatório`
  }),
  descricao: Joi.string().required().messages({
    'string.base': `"descricao" deve ser um texto`,
    'string.empty': `"descricao" não pode estar vazia`,
    'any.required': `"descricao" é obrigatória`
  }),
  concluida: Joi.boolean().required().messages({
    'boolean.base': `"concluida" deve ser verdadeiro ou falso`,
    'any.required': `"concluida" é obrigatória`
  })
});

function validateTarefa(req, res, next) {
  const { error } = schemaTarefa.validate(req.body, { abortEarly: false });

  if (error) {
    const mensagens = error.details.map(detail => detail.message);
    return res.status(400).json({ erros: mensagens });
  }

  next();
}

module.exports = validateTarefa;
