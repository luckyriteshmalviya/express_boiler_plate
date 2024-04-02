const { JWTKEY } = require("./../constants/keys.js");
const jwt = require("jsonwebtoken");
const { dataBase } = require("./database.services");

const getToken = () => {
  return jwt.sign(dataBase, JWTKEY);
};

const decodeToken = (token) => {
  return jwt.verify(token, JWTKEY);
};

module.exports = {
  getToken,
  decodeToken,
};
