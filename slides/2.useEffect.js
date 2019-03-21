import React from "react";
import ReactDOM from "react-dom";
import Code from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./styles.css";

function App() {
  return (
    <div className="slide">
      <h1 className="title">useEffect()</h1>
      <h1 className="subtitle">Isolate side-effects</h1>
      <div className="code">
        <Code language="javascript" style={tomorrowNight}>
          {`useEffect(()=>{ sideEffect() }, [])`}
        </Code>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
