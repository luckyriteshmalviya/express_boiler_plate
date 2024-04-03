const express = require('express');

const todosRoutes = express.Router();

const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('./todos.controller.js');
const { getTodosValidation, createTodosValidation } = require('./todos.validations.js');

todosRoutes.get('/', getTodosValidation, getAllTodos);
todosRoutes.post('/create',createTodosValidation, createTodo);
todosRoutes.put('/update/:id', updateTodo);
todosRoutes.delete('/delete/:id', deleteTodo);

module.exports = {
  todosRoutes,
};
