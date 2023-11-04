import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Tab, Tabs, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Login Icon
import LockOpenIcon from '@mui/icons-material/LockOpen'; // Signup Icon
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fcb23f' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EBK Ticketing System
        </Typography>
        <Tabs
          value={false}
          onChange={false}
          sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}
        >
          <Tab
            label="Home"
            icon={<HomeIcon />}
            component={RouterLink}
            to="/"
            sx={{ color: 'white' }}
          />
          <Tab
            label="Tickets"
            icon={<ListAltIcon />}
            component={RouterLink}
            to="/tickets"
            sx={{ color: 'white' }}
          />
          <Tab
            label="About"
            icon={<InfoIcon />}
            component={RouterLink}
            to="/about"
            sx={{ color: 'white' }}
          />
        </Tabs>
        <Button color="inherit" component={RouterLink} to="/login">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          Login
        </Button>
        <Button color="inherit" component={RouterLink} to="/register">
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
