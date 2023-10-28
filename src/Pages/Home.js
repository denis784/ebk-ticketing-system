import React from 'react';

const homeStyles = {
  container: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  options: {
    listStyle: 'none',
    padding: '0',
  },
  optionItem: {
    margin: '10px 0',
  },
  optionLink: {
    display: 'block',
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '5px',
    transition: 'background-color 0.2s',
  },
  optionLinkHover: {
    backgroundColor: '#0056b3',
  },
};

function Home() {
  return (
    <div style={homeStyles.container}>
      <h1 style={homeStyles.title}>Welcome to the EBK Ticketing System</h1>
      <p style={homeStyles.description}>
        This is the Engineers Board of Kenya's official ticketing system. Here, you can
        report issues, track ticket statuses, and request assistance from our support team.
      </p>
      <p>
        To get started, please choose from the following options:
      </p>
      <ul style={homeStyles.options}>
        <li style={homeStyles.optionItem}>
          <a href="/submit" style={homeStyles.optionLink}>Submit a Ticket</a>
        </li>
        <li style={homeStyles.optionItem}>
          <a href="/tickets" style={homeStyles.optionLink}>View Ticket List</a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
