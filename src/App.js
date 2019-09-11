import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

// component layout
import Main from './components/layout/Main';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
