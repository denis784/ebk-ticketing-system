import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography, Container, Paper } from '@mui/material';
import { Line } from 'react-chartjs-2';

const DashboardPage = () => {
  // Sample data for the chart
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Tickets Resolved',
        data: [10, 20, 15, 25, 18, 30],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  // Simulating fetching real-time data for metrics
  const [metrics, setMetrics] = useState({
    tickets: 50,
    customers: 30,
    resolved: 40,
    pending: 10,
  });

  useEffect(() => {
    // Simulate fetching real-time data
    const fetchData = async () => {
      // Fetch your real-time metrics data here
      // For simplicity, we are using static data
      // Replace this with your actual API call
      // const response = await fetch('your_api_endpoint');
      // const data = await response.json();
      // setMetrics(data);

      // Simulating static data
      setMetrics({
        tickets: 50,
        customers: 30,
        resolved: 40,
        pending: 10,
      });
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" style={{ marginBottom: '20px' }}>
        Welcome to the Dashboard!
      </Typography>

      {/* Metrics Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Number of Tickets
              </Typography>
              <Typography variant="h4">{metrics.tickets}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Number of Customers
              </Typography>
              <Typography variant="h4">{metrics.customers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tickets Resolved
              </Typography>
              <Typography variant="h4">{metrics.resolved}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tickets Pending
              </Typography>
              <Typography variant="h4">{metrics.pending}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Real-time Graph Section */}
      <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Real-time Graph
        </Typography>
        <Line data={chartData} />
      </Paper>
    </Container>
  );
};

export default DashboardPage;
