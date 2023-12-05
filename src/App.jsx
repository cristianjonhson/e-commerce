// App.js

// eslint-disable-next-line no-unused-vars
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="app-container" style={{width: '100vw', height: '100vh'}}>
    <NavBar  />
  </div>
  );
};

export default App;
