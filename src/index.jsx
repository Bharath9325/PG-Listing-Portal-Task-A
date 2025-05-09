import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import your App.jsx
import './index.css'; // Global styles (if applicable)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
