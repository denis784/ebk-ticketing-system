import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import EBKImage from '../ebk-ticketing-system.png'; // Import your EBK image

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const StyledContent = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  height: '60%', // Adjust the height to your preference
});

const StyledImageContainer = styled('div')({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  marginRight: '20px', // Add margin-right for spacing
});

const StyledImage = styled('img')({
  maxHeight: '100%', // Adjust the height of the image
  maxWidth: '100%',
  height: 'auto',
});

const StyledPaper = styled(Paper)({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  padding: '20px',
  height: '70%', // Adjust the height of the login panel
});

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '20px',
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
});

const StyledButton = styled(Button)({
  width: '100%',
});

const StyledLinkContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const Home = () => {
  const [loginError] = useState(null);

  return (
    <StyledContainer maxWidth="md">
      <StyledContent>
        <StyledImageContainer>
          <StyledImage src={EBKImage} alt="EBK Ticketing System" />
        </StyledImageContainer>
        <StyledPaper elevation={3}>
          <StyledTypography variant="h4">
            Welcome to the EBK Ticketing System
          </StyledTypography>
          <StyledForm>
            <StyledTextField
              label="Email address"
              variant="outlined"
              type="email"
            />
            <StyledTextField
              label="Password"
              variant="outlined"
              type="password"
            />
            <StyledButton variant="contained" color="primary">
              Login
            </StyledButton>
          </StyledForm>
          <Typography variant="body2" style={{ color: 'red', marginTop: '10px' }}>
            {loginError}
          </Typography>
          <StyledLinkContainer>
            <Link href="/forgot-password">Forgot password?</Link>
            <br /> {/* Add a line break for separation */}
            <Link href="/register">Don't have an account? Sign Up</Link>
          </StyledLinkContainer>
        </StyledPaper>
      </StyledContent>
    </StyledContainer>
  );
};

export default Home;
