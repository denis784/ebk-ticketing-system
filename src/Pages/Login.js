import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Link } from '@mui/material';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
};

const paperStyle = {
  padding: '20px',
  marginTop: '20px', // Add top margin to lower the content
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setLoginError('Please fill in all fields.');
      return;
    }

    // Add login form submission logic here, e.g., using Firebase authentication
    // You need to implement the login functionality using your authentication service.

    // For demonstration purposes, we'll just log in the console.
    console.log('Login successful');
  };

  return (
    <div style={containerStyle}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={paperStyle}>
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
          {loginError && (
            <Typography variant="body2" style={{ color: 'red', marginTop: '10px' }}>
              {loginError}
            </Typography>
          )}
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/forgot-password">Forgot password?</Link>
            <Link href="/register">Don't have an account? Sign Up</Link>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
