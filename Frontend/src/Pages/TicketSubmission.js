import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  CssBaseline,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
// import { useAuth } from './auth-context';

const useStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: '20px',
    paddingTop: '20px',
  },
  paper: {
    padding: '20px',
    marginBottom: '20px',
  },
  formControl: {
    width: '100%',
  },
  selectLabel: {
    marginTop: '10px',
  },
};
const logoStyle = {
  display: 'block',
  margin: '0 auto',
  width: '150px', // Adjust the width as needed
  marginBottom: '20px',
};

function TicketSubmission() {
  const classes = useStyles;
  const [state, setState] = useState({
    title: '',
    email: '',
    department: '',
    priority: '',
    problem: '',
    contactPhone: '',
    customerName: '',
  });

  // const auth = useAuth(); // Get the authentication context

  // useEffect(() => {
  //   // Redirect to login if the user is not authenticated
  //   if (!auth.isAuthenticated) {
  //     // You can customize the redirection logic or show a login form
  //     window.location.href = '/TicketList';
  //   }
  // }, [auth.isAuthenticated]);

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    setState({ ...state, department: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setState({ ...state, priority: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/tickets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
  
      if (response.ok) {
        console.log('Ticket submitted successfully');
        // Reset form or handle success as needed
      } else {
        const errorData = await response.json(); // Try to parse error response
        console.error('Failed to submit ticket:', errorData);
        // Handle error and provide user feedback
      }
    } catch (error) {
      console.error('Error submitting ticket:', error);
      // Handle unexpected errors
    }
  };
  
  return (
    <div style={classes.root}>
      <CssBaseline />
      <main style={classes.content}>
        <Container maxWidth="md">
          <Paper elevation={3} style={classes.paper}>
          <img
          src={process.env.PUBLIC_URL + '/images/Official-EBK-logo.png'}
          alt=" EBK"          
          style={logoStyle}
        />
            <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
              ADD TICKET
            </Typography>
            <form encType="multipart/form-data" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    name="title"
                    value={state.title}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    type="email"
                    value={state.email}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" style={classes.formControl}>
                    <InputLabel style={classes.selectLabel}>Department</InputLabel>
                    <Select
                      label="Department"
                      name="department"
                      value={state.department}
                      onChange={handleDepartmentChange}
                    >
                      <MenuItem value="Registration">Registration</MenuItem>
                      <MenuItem value="Continuous Professional Development (CPD)">
                        Continuous Professional Development (CPD)
                      </MenuItem>
                      <MenuItem value="Accreditation">Accreditation</MenuItem>
                      <MenuItem value="Compliance">Compliance</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="Procurement">Procurement</MenuItem>
                      <MenuItem value="Graduate Engineers Internship Program">
                        Graduate Engineers Internship Program
                      </MenuItem>
                      <MenuItem value="Human Resource">Human Resource</MenuItem>
                      <MenuItem value="ICT Support">ICT Support</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" style={classes.formControl}>
                    <InputLabel style={classes.selectLabel}>Priority</InputLabel>
                    <Select
                      label="Priority"
                      name="priority"
                      value={state.priority}
                      onChange={handlePriorityChange}
                    >
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                      <MenuItem value="Critical">Critical</MenuItem>
                      <MenuItem value="Emergency">Emergency</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Problem Details"
                    variant="outlined"
                    fullWidth
                    name="problem"
                    multiline
                    rows={3}
                    value={state.problem}
                    onChange={handleInputChange}
                    required
                  />
                  </Grid>
                  <Grid item xs={12}>
                <TextField
                  label="Customer Name" // Add the label for the customer name
                  variant="outlined"
                  fullWidth
                  name="customerName"
                  value={state.customerName}
                  onChange={handleInputChange} // Update the function to handle customerName
                  required
                />
              </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Contact Phone"
                    variant="outlined"
                    fullWidth
                    name="contactPhone"
                    type="tel"
                    value={state.contactPhone}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </main>
    </div>
  );
}

export default TicketSubmission;
