import React from 'react';
import ReactDOM from 'react-dom';
import Code from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './styles.css';

function App() {
  return (
    <div className="slide" style={{ paddingTop: '5em' }}>
      <h1 className="title">Other Hooks</h1>
      <ul>
        <li>
          <code>useReducer</code>
        </li>
        <li>
          <code>useCallback</code>
        </li>
        <li>
          <code>useMemo</code>
        </li>
        <li>
          <code>useRef</code>
        </li>
        <li>
          <code>useImperativeHandle</code>
        </li>
        <li>
          <code>useLayoutEffect</code>
        </li>
        <li>
          <code>useDebugValue</code>
        </li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
