const { Messages } = require("../../constants/messages");


const getAllTodos = (req, res) => {
  return res.send({ message: "This is a Todos list" });
};

const createTodo = (req, res) => {
  res.status(201);
  return res.send({ message: Messages.todoCreated });
};

const updateTodo = (req, res) => {
  res.status(200);
  return res.send({ message: Messages.todoUpdated });
};

const deleteTodo = (req, res) => {
  res.status(200);
  return res.send({ message: Messages.todoDeleted });
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
