import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Link, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
};

const paperStyle = {
  padding: '20px',
  marginTop: '20px', // Add top margin to lower the content
};

const logoStyle = {
  display: 'block',
  margin: '0 auto',
  width: '150px', // Adjust the width as needed
  marginBottom: '20px',
};

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.username || !formData.password) {
      setLoginError('Please fill in all fields.');
      return;
    }

    // Make a login request to the backend API
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle non-successful response (e.g., display error message)
        setLoginError('Invalid credentials. Please try again.');
        return;
      }

      // Handle successful login (e.g., redirect to another page)
      console.log('Login successful');

      // Redirect the user to the "/tickets" page
      navigate('/tickets');
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <Container maxWidth="sm">
        <Paper elevation={3} style={paperStyle}>
          <img
            src={process.env.PUBLIC_URL + '/images/Official-EBK-logo.png'}
            alt=" EBK"
            style={logoStyle}
          />
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                type="email"
                name="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
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
