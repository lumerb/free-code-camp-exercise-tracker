const mongoose = require('mongoose');

const exercisesSchema = mongoose.Schema({
    userId: {
        type: String,
        index: true,
        unique: true
    },
    username: String,
    exercises: [{
        description: String,
        duration: Number,
        date: Date
    }]
})

module.exports = mongoose.model('Exercises', exercisesSchema);