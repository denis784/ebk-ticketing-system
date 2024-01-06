import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import CalendarIcon from '@mui/icons-material/DateRange';
import TaskIcon from '@mui/icons-material/Assignment';
import FileManagerIcon from '@mui/icons-material/Folder';
import CompaniesIcon from '@mui/icons-material/Business';
import AuthenticationIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';

import Email from './email';
import Calendar from './calendar';
import Task from './task';
import FileManager from './filemanager';
import Companies from './companies';
import Authentication from './authentication';
import Settings from './settings';
import Chat from './chat';


// Define the DashboardPage component
const DashboardPage = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {/* Add content for the dashboard page */}
    </div>
  );
};

// Define the DashboardLanding component (home view)
const DashboardLanding = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard Landing Page!</h2>
      {/* Add content for the landing page */}
    </div>
  );
};


// Dashboard component
const Dashboard = () => {
  // Styles
  const dashboardStyle = {
    display: 'flex',
  };

  const navStyle = {
    width: '200px', // Adjust the width as needed
    borderRight: '1px solid #ccc', // Add a border for separation
    padding: '20px',
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const liStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333', // Adjust the color
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '8px', // Adjust the spacing between the icon and text
  };

  return (
    <div style={dashboardStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/dashboardpage" style={linkStyle}>
              <DashboardIcon style={iconStyle} />
              Dashboard
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/chat" style={linkStyle}>
              <ChatIcon style={iconStyle} />
              Chat
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/email" style={linkStyle}>
              <EmailIcon style={iconStyle} />
              Email
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/calendar" style={linkStyle}>
              <CalendarIcon style={iconStyle} />
              Calendar
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/task" style={linkStyle}>
              <TaskIcon style={iconStyle} />
              Task
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/filemanager" style={linkStyle}>
              <FileManagerIcon style={iconStyle} />
              File Manager
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/companies" style={linkStyle}>
              <CompaniesIcon style={iconStyle} />
              Companies
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/authentication" style={linkStyle}>
              <AuthenticationIcon style={iconStyle} />
              Authentication
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/settings" style={linkStyle}>
              <SettingsIcon style={iconStyle} />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/email" element={<Email />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/task" element={<Task />} />
        <Route path="/filemanager" element={<FileManager />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
