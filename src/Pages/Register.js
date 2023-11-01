import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
   height: '100vh',
};

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration form submission logic here
  };

  return (
    <div style={containerStyle}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                type="email"
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Register;
