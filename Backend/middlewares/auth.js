// middlewares/auth.js
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with your secret key

module.exports = (req, res, next) => {
    // Get the token from the request header
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Set the user information in the request
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token' });
    }
};