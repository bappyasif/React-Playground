import React from "react";
import "./App.css";

import FetchingData from "./components/FetchData";
import HandlingClick from "./components/HandlingClicks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>React Tutorial</div>
      </header>
      <h4>Learning React</h4>
      <HandlingClick />
      <FetchingData />
    </div>
  );
}

export default App;
