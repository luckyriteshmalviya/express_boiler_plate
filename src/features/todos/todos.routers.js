const express = require("express");

const todosRoutes = express.Router();

const { getTodosController } = require("./todos.controller.js");
const getTodosValidation = require("./todos.validations.js");

todosRoutes.get("/", getTodosController);

module.exports = {
  todosRoutes,
};
