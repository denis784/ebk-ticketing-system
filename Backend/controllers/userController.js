// controllers/userController.js

const User = require('../models/user');
const bcrypt = require('bcrypt');

// User registration controller function
exports.registerUser = async(req, res) => {
    try {
        // Get registration data from the request body
        const { fullName, email, phone, password } = req.body;


        // Check if the user already exists with the provided email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }




        // Hash the password before saving it to the database
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user document
        const newUser = new User({
            fullName,
            email,
            phone,
            password: hashedPassword,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
};

// User login
exports.userLogin = (req, res) => {
    // Implement user login logic
};

// Get user profile (requires authentication)
exports.getUserProfile = (req, res) => {
    // Implement logic to retrieve user profile
};

// Update user profile (requires authentication)
exports.updateUserProfile = (req, res) => {
    // Implement logic to update user profile
};

// Add more user-related controller functions as needed for your application

// Example: User authentication function with JWT
exports.authenticateUser = (req, res, next) => {
    // Implement user authentication using JWT
};