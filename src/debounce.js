import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './components/styles.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <div className="debounce">
        <input onChange={e => setValue(e.target.value)} defaultValue={value} />
        <div className="output" key={value}>
          {value}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
