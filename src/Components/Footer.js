import React, { useState } from 'react';
import { Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PolicyIcon from '@mui/icons-material/Policy';

const FooterContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#746454', // Set the background color
  color: 'white',
  position: 'fixed', // Position the footer at the bottom
  bottom: 0,
  width: '100%',
  padding: '8px 0', // Add some padding to make it more visible
});

const BottomNavigationActionWithoutBackground = styled(BottomNavigationAction)({
  // Override the background color
  backgroundColor: 'transparent',
});

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <FooterContainer>
      <Typography variant="body1">
        © {new Date().getFullYear()} Engineers Board of Kenya.
      </Typography>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
      >
        <BottomNavigationActionWithoutBackground
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationActionWithoutBackground
          label="Contact Us"
          icon={<ContactSupportIcon />}
          component={Link}
          to="/contact"
        />
        <BottomNavigationActionWithoutBackground
          label="Privacy Policy"
          icon={<PolicyIcon />}
          component={Link}
          to="/privacy"
        />
      </BottomNavigation>
    </FooterContainer>
  );
};

export default Footer;
