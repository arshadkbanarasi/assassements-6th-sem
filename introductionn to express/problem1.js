const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const PORT = 3000;
const DB_PATH = './db.json';

app.get('/todos', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  res.json(data.todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;
  const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  data.todos.push(newTodo);
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.status(201).json({ message: 'Todo added successfully' });
});

app.put('/todos/update-status', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  data.todos = data.todos.map(todo => {
    if (todo.id % 2 === 0 && todo.status === false) {
      todo.status = true;
    }
    return todo;
  });
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.json({ message: 'Updated even ID todos with status false to true' });
});

app.delete('/todos/delete-true', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  data.todos = data.todos.filter(todo => !todo.status);
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  res.json({ message: 'Deleted all todos with status true' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
