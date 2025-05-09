import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import MainApp from './MainApp'; // Import MainApp

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  return (
    <>
      {!loggedIn ? (
        <Login onLogin={() => {
          localStorage.setItem('isLoggedIn', 'true');
          setLoggedIn(true);
        }} />
      ) : (
        <MainApp />
      )}
    </>
  );
}

export default App;
