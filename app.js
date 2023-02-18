const express = require('express');
const app = express();

// Define middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes for getting and registering students
app.get('/students/:id', (req, res) => {
  // TODO: Implement get student details by id
});

app.post('/students', (req, res) => {
  // TODO: Implement register new student
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
