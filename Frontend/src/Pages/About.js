import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ContainerStyled = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

const PaperStyled = styled(Paper)({
  padding: '20px',
  marginTop: '20px',
});

const About = () => {
  return (
    <ContainerStyled maxWidth="md">
      <PaperStyled elevation={3}>
        <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Engineers Board of Kenya (EBK) Help Desk
        </Typography>
        <Typography variant="body1">
          Welcome to EBK's Help Desk! We're your go-to resource for swift and transparent support.
        </Typography>
        <Typography variant="body1">
          <strong>Who We Are:</strong>
          <br />
          EBK, established under the Engineers Act (2011), is the regulatory body for Kenya's engineering profession. We register and oversee engineers, firms, and technicians.
        </Typography>
        <Typography variant="body1">
          <strong>Our Commitment:</strong>
          <br />
          We're dedicated to efficient, transparent service, committed to:
        </Typography>
        <ul>
          <li>Efficiency: Quick and effective solutions for your inquiries and issues.</li>
          <li>Transparency: Real-time tracking of your requests.</li>
          <li>Quality Service: Expert guidance from our dedicated team.</li>
        </ul>
        <Typography variant="body1">
          <strong>How It Works:</strong>
          <br />
        </Typography>
        <ul>
          <li>Submit a Ticket: Easily submit inquiries or issues online.</li>
          <li>Real-Time Updates: Track your ticket's progress and communicate with our team.</li>
          <li>Resolution: We work diligently for a satisfactory outcome.</li>
          <li>Feedback: Your input helps us improve.</li>
        </ul>
        <Typography variant="body1">
          <strong>Get In Touch:</strong>
          <br />
          For questions or support, use our Help Desk. We're here to serve you!
        </Typography>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default About;
