import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import store from "./redux/Store";
import ContactContainer from "./components/ContactContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ContactContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
