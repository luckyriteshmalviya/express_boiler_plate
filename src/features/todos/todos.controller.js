const { Messages } = require('../../constants/messages');

const dbArray = [];

const getAllTodos = (req, res) => res.send({ message: 'This is a Todos list', data: dbArray });

const createTodo = (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    todoId: new Date().toString(),
    todoTitle: title,
    todoDescription: description,
  };

  dbArray.push(newTodo);
  res.status(201);
  return res.send({ message: Messages.todoCreated, data: dbArray });
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dbArray.length; i++) {
    if (dbArray[i].todoId === id) {
      dbArray[i].todoTitle = title;
      dbArray[i].todoDescription = description;
      break;
    }
  }
  res.status(200);
  return res.send({ message: Messages.todoUpdated, data: dbArray });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < dbArray.length; i++) {
    if (dbArray[i].todoId === id) {
      dbArray.splice(i, 1);
    }
  }
  res.status(200);
  return res.send({ message: Messages.todoDeleted, data: dbArray });
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
