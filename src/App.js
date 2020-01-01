import React from 'react';
import nationwideimage from '../src/images/Nationwide+Building+Society+logo.png'
import Account from './reactPoc';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={nationwideimage} className="" alt="logo" />
      <Account/>
    </div>
  );
}

export default App;
