// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth'); // Middleware for user authentication

// Define your user routes

// Register a new user
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.userLogin);

// Get user profile (requires authentication)
router.get('/profile', userController.getUserProfile);

// Update user profile (requires authentication)
router.put('/profile', userController.updateUserProfile);

// Add more user routes as needed for your application

module.exports = router;