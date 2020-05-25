import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.index";
import * as serviceWorker from "./serviceWorker";

// let greeting = React.createElement("h1", {}, "Hello React!");
// let greeting = <h1>Hello React!!</h1>;
// let currentDate = () => {
//   let date = new Date();
//   return date.toDateString();
// };
// greeting = <h1>Hello React!! Current Date : {currentDate()}</h1>;
// ReactDOM.render(greeting, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

// Starting Structure
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
