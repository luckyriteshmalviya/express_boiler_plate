const express = require('express');

const app = express();
const PORT = 4000;

const { todosRoutes } = require('./src/features/todos/todos.routers.js');
const { authRoute } = require('./src/features/authentication/auth.routers.js');
const { getToken, decodeToken } = require('./src/services/jwt.services.js');
app.use(express.json());


app.use('/todos', todosRoutes);
app.use('/', authRoute);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
