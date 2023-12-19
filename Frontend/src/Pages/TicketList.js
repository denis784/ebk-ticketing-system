import React, { useState, useEffect } from 'react';
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
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'; // Import Link from React Router

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  const sidebarItems = [
    { text: 'Dashboard', icon: <InboxIcon /> },
    { text: 'Chat', icon: <EmailIcon /> },
    { text: 'Email', icon: <EmailIcon /> },
    { text: 'Calendar', icon: <EventNoteIcon /> },
    { text: 'Task', icon: <AssignmentIcon /> },
    { text: 'File Manager', icon: <DescriptionIcon /> },
    { text: 'Companies', icon: <BusinessIcon /> },
    { text: 'Authentication', icon: <SecurityIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/ticketslist/');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error.message);
      }
    };

    fetchData();
  }, []); // Run the effect only once on mount

  return (
    <div style={{ display: 'flex' }}>
      {/* ... (unchanged) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
            <Link to="/submit">
              <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                Add New Ticket
              </Button>
            </Link>
          </div>
          <TableContainer component={Paper} style={{ flex: 1 }}>
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
                    <TableCell>{ticket.time_created}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </div>
  );
};

export default TicketList;
