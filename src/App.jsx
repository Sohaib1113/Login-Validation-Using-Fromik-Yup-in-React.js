import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
import './App.css';
import LoginForm from './Components/LoginForm';
import { Box } from '@mui/material';
import Welcome from './Components/Welcome';
import Dashboard from './Components/Dashboard'; // Import Dashboard component

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap your components with Router */}
      <Box sx={{height:"100vh",width:"100wh",display:"flex"}}>
        <Switch> {/* Switch component will only render the first matched Route */}
          <Route exact path="/">
            <Welcome />
            <LoginForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
