// models/ticket.js
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    // Other ticket fields
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;