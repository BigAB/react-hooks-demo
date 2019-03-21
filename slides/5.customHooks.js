import React from 'react';
import ReactDOM from 'react-dom';
import Code from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './styles.css';

function App() {
  return (
    <div className="slide">
      <h1 className="title">Custom Hooks</h1>
      <h1 className="subtitle">Make your own</h1>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
