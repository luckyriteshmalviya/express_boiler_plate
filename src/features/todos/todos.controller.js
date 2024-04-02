const getTodosController = (req, res) => {
  return res.send({ message: "This is a Todos list" });
};

module.exports = { getTodosController };
