import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ObtainedCode } from "./obtainedCode";
import { List } from "./Component";

const e = React.createElement;

const App = () => {
  useEffect(() => {
    /* Here we replace all placeholders obtained from backend */
    document.querySelectorAll(".InjectedList").forEach((domContainer) => {
      const elementsId = parseInt(domContainer.dataset.elementsid, 10);
      ReactDOM.render(e(List, { elementsId }), domContainer);
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {ObtainedCode}
      </header>
    </div>
  );
};

export default App;
