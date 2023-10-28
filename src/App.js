import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicketSubmission from './Pages/TicketSubmission';
import TicketList from './Pages/TicketList';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} /> {/* Add this route */}
          <Route path="/submit" element={<TicketSubmission />} />
          <Route path="/tickets" element={<TicketList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
