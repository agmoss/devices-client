import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from '../Main'

function App() {
  return (
    <div className="App">
      <select id = "selectStatus"></select>
      <Main/>
    </div>
  );
}

export default App;
