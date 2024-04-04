const express = require('express');

const todosRoutes = express.Router();

const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('./todos.controller.js');
const { getAuthValidation, createTodosValidation } = require('./todos.validations.js');

todosRoutes.get('/',getAuthValidation, getAllTodos);
todosRoutes.post('/create', getAuthValidation, createTodosValidation, createTodo);
todosRoutes.put('/update/:id', getAuthValidation, updateTodo);
todosRoutes.delete('/delete/:id', getAuthValidation, deleteTodo);

module.exports = {
  todosRoutes,
};
