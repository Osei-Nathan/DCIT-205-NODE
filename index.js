const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Parse JSON request body
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('<mongoDB-connection-string>', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Define student schema and model
const studentSchema = new mongoose.Schema({
    studentId: String,
    name: String,
    age: Number,
    gender: String,
    address: String,
    phone: String,
    email: String
});
const Student = mongoose.model('Student', studentSchema);

// Define GET endpoint for retrieving student details by student id
app.get('/students/:id', async (req, res) => {
    const student = await Student.findOne({ studentId: req.params.id });
    if (!student) {
        return res.status(404).send('Student not found');
    }
    return res.send(student);
});

// Define POST endpoint for registering new student
app.post('/students', async (req, res) => {
    const { studentId, name, age, gender, address, phone, email } = req.body;
    const student = new Student({ studentId, name, age, gender, address, phone, email });
    try {
        await student.save();
        return res.send(student);
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
