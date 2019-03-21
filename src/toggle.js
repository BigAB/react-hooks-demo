import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Toggle } from './components/Toggle';
import './components/styles.css';

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <div>
        <Toggle />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
