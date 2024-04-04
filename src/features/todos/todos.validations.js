const { decodeToken } = require('../../services/jwt.services');

const getAuthValidation = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      res.status(401).send({ message: 'Need Authorization token' });
    }

    const userDetail = decodeToken(authorization);

    if (userDetail) {
      next();
    } else {
      res.status(401).send({ message: 'send proper authorization token' });
    }
  } catch (error) {
    console.log(error.name, '4567', error.message);

    if (error.name === 'JsonWebTokenError') {
      res.status(401).send({ message: 'Please send proper authorization token' });
    }
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
  createTodosValidation,
  getAuthValidation,
};
