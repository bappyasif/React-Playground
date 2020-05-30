import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// import App from "./components/App/index.js";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // greeting,
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// let currentDate = () => {
//   let date = new Date();
//   return date.toDateString();
// };

// let greeting = (
//   <h4>Hello React Dev Environment, Current Date : {currentDate()}</h4>
// );
// let greeting = React.createElement("h4", {}, "Hello React Dev Environment");

// ReactDOM.render(greeting, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
