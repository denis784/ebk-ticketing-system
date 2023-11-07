import React from 'react';
import {
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom'; // Import Link from React Router

const TicketList = () => {
  // Sample ticket data (you can replace this with data from your backend)
  const tickets = [
    {
      id: 1,
      title: 'Ticket 1',
      email: 'user1@example.com',
      department: 'Support',
      priority: 'High',
      problem: 'Problem 1 details',
      contactPhone: '123-456-7890',
      customerName: 'Customer A',
      time: '2023-01-01',
    },
    {
      id: 2,
      title: 'Ticket 2',
      email: 'user2@example.com',
      department: 'IT',
      priority: 'Low',
      problem: 'Problem 2 details',
      contactPhone: '987-654-3210',
      customerName: 'Customer B',
      time: '2023-01-02',
    },
    {
      id: 3,
      title: 'Ticket 3',
      email: 'user3@example.com',
      department: 'HR',
      priority: 'Medium',
      problem: 'Problem 3 details',
      contactPhone: '555-555-5555',
      customerName: 'Customer C',
      time: '2023-01-03',
    },
  ];

  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h1>Ticket List</h1>
        <Link to="/submit"> {/* Use Link to navigate to "/submit" */}
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add New Ticket
          </Button>
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticket No.</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Problem</TableCell>
              <TableCell>Contact Phone</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.email}</TableCell>
                <TableCell>{ticket.department}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
                <TableCell>{ticket.problem}</TableCell>
                <TableCell>{ticket.contactPhone}</TableCell>
                <TableCell>{ticket.customerName}</TableCell>
                <TableCell>{ticket.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TicketList;
