import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated when the app starts
    // You may fetch user data from your backend API here
  }, []);

  const handleRegister = async (formData) => {
    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 201) {
        // User registered successfully
        // You can handle the success case as needed (e.g., redirect to login)
      } else {
        // Handle registration error
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (formData) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        const { token } = await response.json();
        // Save the token in localStorage or cookies for future requests
        // Redirect to the user dashboard or handle login success as needed
      } else {
        // Handle login error
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            {user ? <Redirect to="/dashboard" /> : <Register onRegister={handleRegister} />}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/dashboard" /> : <Login onLogin={handleLogin} />}
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

