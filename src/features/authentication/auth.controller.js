const { userTable } = require('../../services/database.services');
const { getToken } = require('../../services/jwt.services');
const { v4: uuidv4 } = require('uuid');

let getSignUp = (req, res) => {
  const { name, email, mobileNumber, password } = req.body;

  const user = {
    id: uuidv4(),
    name: name,
    email: email,
    mobileNumber: mobileNumber,
    password: password,
  };

  userTable.push(user);
  res.status(201);
  return res.send({ message: 'User signUp completed' });
};

let getLogin = (req, res) => {
  const { email } = req.body;
  let currUser;

  for (let i = 0; i < userTable.length; i++) {
    if (userTable[i].email === email) {
      currUser = userTable[i];
    }
  }
  if (!currUser) {
    return res.status(400).send({ message: 'User not found' });
  }

  delete currUser.password;

  const token = getToken(currUser);

  res.status(200);
  return res.send({ message: 'User login successfully', authToken: token });
};

module.exports = { getSignUp, getLogin };
