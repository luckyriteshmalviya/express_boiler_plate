const express = require("express");

const todosRoutes = express.Router();

const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./todos.controller.js");
const getTodosValidation = require("./todos.validations.js");

todosRoutes.get("/", getAllTodos);
todosRoutes.post("/create", createTodo);
todosRoutes.put("/update/:id", updateTodo);
todosRoutes.delete("/delete/:id", deleteTodo)

module.exports = {
    todosRoutes,
};
