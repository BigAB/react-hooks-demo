import React from "react";
import ReactDOM from "react-dom";
import Code from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./styles.css";

function App() {
  return (
    <div className="slide">
      <h1 className="title">useContext()</h1>
      <h1 className="subtitle">Defeat prop driling</h1>
      <div className="code">
        <Code language="javascript" style={tomorrowNight}>
          {`const value = useContext(MyContext);`}
        </Code>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
