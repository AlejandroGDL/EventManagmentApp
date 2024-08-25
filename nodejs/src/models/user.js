const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    StudentName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    StudentLastName: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    StudenID: {
        type: Number,
        required: true,
        min: 6,
        max: 255
    },
    StudentPassword: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    StudentImage: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    StudentInfo: {
        type: Object,
        required: true,
        min: 6,
        max: 1024
    },
});

module.exports = mongoose.model('User', userSchema);