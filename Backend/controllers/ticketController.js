// controllers/ticketController.js
const Ticket = require('../models/ticket');

// Get all tickets
exports.getAllTickets = async(req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching tickets' });
    }
};

// Get a ticket by ID
exports.getTicketById = async(req, res) => {
    const ticketId = req.params.id;
    try {
        const ticket = await Ticket.findById(ticketId);
        if (!ticket) {
            res.status(404).json({ message: 'Ticket not found' });
            return;
        }
        res.status(200).json(ticket);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching ticket by ID' });
    }
};

// Create a new ticket
exports.createTicket = async(req, res) => {
    const { title, description } = req.body;
    const newTicket = new Ticket({
        title,
        description,
    });

    try {
        const savedTicket = await newTicket.save();
        res.status(201).json(savedTicket);
    } catch (err) {
        res.status(500).json({ message: 'Error creating ticket' });
    }
};

// Update a ticket by ID
exports.updateTicket = async(req, res) => {
    const ticketId = req.params.id;
    const updatedFields = req.body;
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, updatedFields, { new: true });
        if (!updatedTicket) {
            res.status(404).json({ message: 'Ticket not found' });
            return;
        }
        res.status(200).json(updatedTicket);
    } catch (err) {
        res.status(500).json({ message: 'Error updating ticket' });
    }
};

// Delete a ticket by ID
exports.deleteTicket = async(req, res) => {
    const ticketId = req.params.id;
    try {
        const deletedTicket = await Ticket.findByIdAndRemove(ticketId);
        if (!deletedTicket) {
            res.status(404).json({ message: 'Ticket not found' });
            return;
        }
        res.status(200).json(deletedTicket);
    } catch (err) {
        res.status(500).json({ message: 'Error deleting ticket' });
    }
};