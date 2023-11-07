// models/user.js
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;