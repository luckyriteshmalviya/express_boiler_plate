const express = require('express');

const authRoute = express.Router();
const { getAuthController } = require('./auth.controller.js');
const { getAuthValidation } = require('./auth.validations.js');

authRoute.get('/', getAuthValidation, getAuthController);

module.exports = { authRoute };
