const mongoose = require('mongoose')

const student = mongoose.model('User', {
        id: Number,
        Name: String,
        programme: String,
        level: Number,
        hall: String
    });

module.exports = student;