import React, { useState } from 'react';
import './Login.css'; // Make sure this file is imported

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded login credentials for testing purposes
    if (username === 'user' && password === 'password') {
      onLogin(); // Trigger login success
      localStorage.setItem('isLoggedIn', 'true'); // Save login state to localStorage
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Login to PG Listing Portal</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
