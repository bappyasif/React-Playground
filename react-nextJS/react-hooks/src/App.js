import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import UsingHook from "./components/UsingHook";
import NewsAPI from "./components/NewsApi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewsAPI />
      </header>
      <UsingHook />
      <Counter />
    </div>
  );
}

export default App;
