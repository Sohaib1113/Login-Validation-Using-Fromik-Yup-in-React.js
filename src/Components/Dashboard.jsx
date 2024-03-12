import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: 'lightgray', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h2" component="h1">
        Dashboard
      </Typography>
    </Box>
  );
};

export default Dashboard;
