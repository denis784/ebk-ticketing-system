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

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    setState({ ...state, department: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setState({ ...state, priority: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div style={classes.root}>
      <CssBaseline />
      <main style={classes.content}>
        <Container maxWidth="md">
          <Paper elevation={3} style={{ padding: '20px' }}>
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
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Department</InputLabel>
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
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Priority</InputLabel>
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
