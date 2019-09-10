import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

// component layout
import Main from './components/layout/Main';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Main />
      </div>
    </Router>
  );
}

export default App;
