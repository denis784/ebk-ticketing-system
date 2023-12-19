import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const ContainerStyled = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const PaperStyled = styled(Paper)({
  padding: '20px',
  marginTop: '20px',
});

const LogoImage = styled('img')({
  display: 'block',
  margin: '0 auto',
  width: '150px',
  marginBottom: '20px',
});

const FormContainer = styled('form')({
  marginBottom: '20px',
});

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
  });
  
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', formData);

      if (response.status === 200) {
        // Registration was successful, add your success logic here
        setError('Account Successfully Registered'); // Clear any previous error
      } else {
        // Handle registration error, e.g., display an error message
        setError('Registration failed. Please check your input and try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error, e.g., display an error message
      setError('An error occurred during registration. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ContainerStyled maxWidth="sm">
      <PaperStyled elevation={3}>
        <LogoImage
          src={process.env.PUBLIC_URL + '/images/Official-EBK-logo.png'}
          alt="Logo"
        />

        <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Register
        </Typography>

        <FormContainer onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />

          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />

          <TextField
            label="Phone "
            variant="outlined"
            fullWidth
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />

          

          <TextField
            label="Email address"
            variant="outlined"
            fullWidth
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />

          {error && (
            <Typography variant="body2" style={{ color: 'red', marginBottom: '10px' }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginBottom: '20px' }}
          >
            Register
          </Button>

          <Typography variant="body2">
            Already have an account?{' '}
            <Link href="/login" color="primary">
              Login
            </Link>
          </Typography>
        </FormContainer>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default Register;
