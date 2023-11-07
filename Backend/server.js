const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Ticket = require('./models/ticket'); // Import the Ticket model
const User = require('./models/user'); // Import the user model

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to your MongoDB (replace with your actual MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/ebk_ticketing_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define your API routes for tickets
const ticketRoutes = require('./routes/ticketRoutes');
app.use('/api/tickets', ticketRoutes);

// Import user routes and controllers
const userRoutes = require('./routes/userRoutes'); // Import user routes
const userController = require('./controllers/userController');

// Define your API routes for users
app.use('/api/users', userRoutes);

// Add authentication middleware if needed (e.g., using JWT)
app.use('/api', userController.authenticateUser);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});