const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/school-management-system', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error(error);
  });

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
const Student = require('./models/student');

// POST endpoint to register a new student
app.post('/students', async (req, res) => {
  const student = new Student({
    studentId: req.body.studentId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
``
