// routes/ticketRoutes.js
const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Get all tickets
router.get('/', ticketController.getAllTickets);

// Get a ticket by ID
router.get('/:id', ticketController.getTicketById);

// Create a new ticket
router.post('/', ticketController.createTicket);

// Update a ticket
router.put('/:id', ticketController.updateTicket);

// Delete a ticket
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;