import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
  // document.getElementById("portal_root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * Types Of React Components

 // stateless Functional Component
function welcome(props) {
  return <h4>Greetings, ${props.name}</h4>;
}

// stateful Class Component
class welcome extends React.Component {
  render() {
    return <h4>Greetings, ${props.name}</h4>;
  }
}
 */
