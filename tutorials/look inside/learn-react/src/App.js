import React from "react";
import "./App.css";

import FetchingData from "./components/FetchData";
import HandlingClick from "./components/HandlingClicks";
import CounterHandling from "./components/Counter";
import CounterHook from "./components/HookCounter";
import DocumnetTitle from "./components/ChangeTitle";
import HookTitle from "./components/ChangeTitleUsingHook/Index";
import NewsHook from "./components/NewsComponentUsingHook/index";
import NewsHookControlledEffect from "./components/NewsComponentUsingHook/ControlingUseEffectHook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>React Tutorial</div>
      </header>
      <h4>Learning React</h4>
      <NewsHookControlledEffect />
      <NewsHook />
      <HookTitle />
      <DocumnetTitle />
      <CounterHook />
      <CounterHandling />
      <HandlingClick />
      <FetchingData />
    </div>
  );
}

export default App;
