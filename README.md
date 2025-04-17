
# 📌 API de Gerenciamento de Tarefas

API REST completa desenvolvida com Node.js para a Atividade Prática Avançada II da faculdade. O sistema permite criar, listar, atualizar, concluir e deletar tarefas, com validações, filtros e tratamento de erros.

Repositório: [TiagoCarvalho-true/api-task](https://github.com/TiagoCarvalho-true/api-task)

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Joi (validação)
- UUID (ID único)
- Morgan (logs HTTP)
- Estrutura MVC simplificada

---

## 📂 Estrutura de Pastas

```
api-task/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── utils/
│   ├── database/
│   └── app.js
```



## 📦 Instalação

```
git clone https://github.com/TiagoCarvalho-true/api-task.git
cd api-task
npm install
node src/app.js
```

Servidor rodando em: `http://localhost:3000`



## 🧪 Testes

Com Insomnia ou qualquer API client para testar os endpoints.



## 📚 Endpoints

### 🔹 `GET /tarefas`
Retorna todas as tarefas.

### 🔹 `GET /tarefas?concluida=true`
Filtra tarefas concluídas (ou `false` para não concluídas).

### 🔹 `GET /tarefas/:id`
Retorna uma tarefa específica por ID.

### 🔹 `POST /tarefas`
Cria uma nova tarefa.

**Body (JSON):**
```
{
  "titulo": "Estudar Node.js",
  "descricao": "Fazer a atividade da faculdade",
  "concluida": false
}
```

### 🔹 `PUT /tarefas/:id`
Atualiza todos os dados de uma tarefa.

**Body (JSON):** (igual ao POST)

### 🔹 `PATCH /tarefas/:id/concluir`
Marca a tarefa como concluída (`concluida: true`).

### 🔹 `DELETE /tarefas/:id`
Remove uma tarefa da lista.



## ⚠️ Validações

- `titulo`: mínimo 3 caracteres.
- `descricao`: obrigatório.
- `concluida`: deve ser `true` ou `false`.



## ✅ Logs no Terminal

Mensagens como:
- "Tarefa criada com sucesso."
- "Tarefa deletada."
- "Tentativa de criação com dados inválidos."



## 🧠 Organização em Camadas

- **Controller**: Lida com as requisições e respostas HTTP.
- **Service**: Regras de negócio e manipulação dos dados.
- **Middleware**: Validações com Joi.
- **Util**: Logger customizado.
- **Database**: Simulação de banco com array em memória.



Feito com 💻 por [Tiago Carvalho](https://github.com/TiagoCarvalho-true)
```

