const getTodosValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    next();
  } else {
    res.send({ message: 'Need Authorization token' });
  }
};

const createTodosValidation = (req, res, next) => {
  const { authorization } = req.headers;
  const { title, description } = req.body;

  if (authorization && title && description) {
    next();
  } else {
    res.send({ message: 'Need Authorization token' });
  }
};

module.exports = {
  getTodosValidation,
  createTodosValidation,
};
