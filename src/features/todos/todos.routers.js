const express = require("express");

const todosRoutes = express.Router()

todosRoutes.get("/", (req, res) => {
  return res.send({ message: "Hi It is todos routes" });
});

module.exports = {
  todosRoutes,
};