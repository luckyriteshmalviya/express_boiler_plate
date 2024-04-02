const express = require("express");

const app = express();
const PORT = 4000;

const todosRoutes = require("./src/features/todos/todos.routers.js")

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello There");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
