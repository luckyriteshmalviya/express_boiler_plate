const signUpValidation = (req, res, next) => {
  const {name, email, mobileNumber, password} = req.body
  if (!name || !email || !mobileNumber || !password) {
    return res.send({ message: 'All fields are mandatory' });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email ) {
    return res.status(401).send({ message: 'Name and Email fields are mandatory' });
  }
  next();
};

module.exports = {
  signUpValidation,
  loginValidation,
};
