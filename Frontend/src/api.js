import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Replace with your backend URL

export const getTickets = async() => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/tickets`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Add a new function to get users
export const registerUser = async(userData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/users`, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    // Other API functions (createTicket, updateTicket, deleteTicket, etc.)