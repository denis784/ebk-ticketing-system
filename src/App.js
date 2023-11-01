import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TicketSubmission from './Pages/TicketSubmission';
import TicketList from './Pages/TicketList';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<TicketSubmission />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
