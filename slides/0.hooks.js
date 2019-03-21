import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="slide">
      <h1 className="title">React Hooks</h1>
      <h1 className="subtitle">Higher, Further, Faster, Baby</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
