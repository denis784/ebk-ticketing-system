// routes/tickets.js
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middlewares/auth'); // Middleware for user authentication and authorization

// Create a new ticket
router.post('/', authMiddleware, ticketController.createTicket);

// Update a ticket
router.put('/:id', authMiddleware, ticketController.updateTicket);

// Get all tickets
router.get('/', authMiddleware, ticketController.getAllTickets);

module.exports = router;