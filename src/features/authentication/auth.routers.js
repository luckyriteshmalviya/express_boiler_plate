const express = require('express');

const authRoute = express.Router();
const { getSignUp, getLogin } = require('./auth.controller.js');
const { signUpValidation, loginValidation } = require('./auth.validations.js');

authRoute.post('/signUp', signUpValidation, getSignUp);
authRoute.post('/login', loginValidation, getLogin);


module.exports = { authRoute };
