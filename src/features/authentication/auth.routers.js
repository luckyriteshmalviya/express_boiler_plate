const express = require('express');

const authRoute = express.Router();
const { getSignUp, getLogin, getAllUsers } = require('./auth.controller.js');
const { signUpValidation, loginValidation } = require('./auth.validations.js');

authRoute.post('/signUp', signUpValidation, getSignUp);
authRoute.post('/login', loginValidation, getLogin);
authRoute.get("/fakeRoute", getAllUsers)


module.exports = { authRoute };
