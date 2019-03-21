import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './components/styles.css';

function App() {
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(5.0);

  return (
    <div className="App">
      <h1>useEffect</h1>
      <div className="countdown">
        <label className={classnames({ running })}>{count.toFixed(1)}</label>
        <button onClick={() => setRunning(!running)}>
          {running ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
