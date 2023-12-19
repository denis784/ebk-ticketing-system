import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Chat from './Chat';
import Email from './Email';
import Calendar from './Calendar';
import Task from './Task';
import FileManager from './FileManager';
import Companies from './Companies';
import Authentication from './Authentication';
import Settings from './Settings';

const Dashboard = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/email">Email</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
          <li>
            <Link to="/filemanager">File Manager</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/authentication">Authentication</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/email">
          <Email />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/task">
          <Task />
        </Route>
        <Route path="/filemanager">
          <FileManager />
        </Route>
        <Route path="/companies">
          <Companies />
        </Route>
        <Route path="/authentication">
          <Authentication />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
