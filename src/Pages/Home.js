import React from 'react';
import { Container, Typography, Paper, List, ListItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import Footer from '../Components/Footer';

const homeStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    marginTop: '20px',
    minHeight: '100vh', // Ensure the content stretches to at least the full viewport height
    position: 'relative', // Needed to position the footer
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  footer: {
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Place it at the bottom
    width: '100%', // Full width
  },
};

function Home() {
  return (
    <div>
     
      <Container maxWidth="sm" style={homeStyles.container}>
        <Paper elevation={3} style={homeStyles.paper}>
          <Typography variant="h4" style={homeStyles.title}>
            Welcome to the EBK Ticketing System
          </Typography>
          <Typography variant="body1" style={homeStyles.description}>
            This is the Engineers Board of Kenya's official ticketing system. Here, you can
            report issues, track ticket statuses, and request assistance from our support team.
          </Typography>
          <Typography variant="body2">
            To get started, please choose from the following options:
          </Typography>
          <List>
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/submit"
              >
                Submit a Ticket
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/tickets"
              >
                View Ticket List
              </Button>
            </ListItem>
          </List>
        </Paper>
      </Container>
      <Footer style={homeStyles.footer} />
    </div>
  );
}

export default Home;
