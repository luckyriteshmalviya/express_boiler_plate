const { JWTKEY } = require("./../constants/keys.js");
const jwt = require("jsonwebtoken");

const getToken = (userData) => {
  return jwt.sign(userData, JWTKEY);
};

const decodeToken = (token) => {
  return jwt.verify(token, JWTKEY);
};

module.exports = {
  getToken,
  decodeToken,
};
