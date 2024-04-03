const express = require('express');

const app = express();
const PORT = 4000;

const { todosRoutes } = require('./src/features/todos/todos.routers.js');
const { authRoute } = require('./src/features/authentication/auth.routers.js');
const { getToken, decodeToken } = require('./src/services/jwt.services.js');
app.use(express.json());

app.get('/', (req, res) => {
  const token = getToken();
  return res.send(`Hello There ${token}`);
});

app.get('/decode', (req, res) => {
  const { authorization } = req.headers;
  const auth = authorization;
  const token = decodeToken(auth);
  return res.send(token);
});

app.use('/todos', todosRoutes);
app.use('/auth', authRoute);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
