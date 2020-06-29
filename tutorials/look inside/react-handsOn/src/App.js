import React from "react";
import logo from "./logo.svg";
import "./App.css";

import * as customStyles from "./styles";
import Componnent01 from "./funtionalComponents/comp1";
import Container01 from "./containers/cont1";
import Container02 from "./containers/cont2";
import Container03 from "./containers/cont3";
import Container04 from "./containers/cont4";
import Container05 from "./containers/cont5";

class App extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 5 });
  };

  x = "doe";
  render() {
    let var1 = {
      key1: "Some data",
    };

    let styles = {
      border: "solid",
      textAlign: "center",
      boxShadow: "2px 2px",
    };

    let checkConditions = () => {
      if (true) {
        return <div>cond 1</div>;
      } else {
        return <div>cond 2</div>;
      }
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          React
          <br />
          Controlled Form
          <Container04 />
          <br />
          Uncontrolled Form
          <Container03 />
        </header>
        <Container05 />
        <br />
        <Container02 />
        <div>Div 1</div>
        {checkConditions()}
        <div>Div 2</div>
        {checkConditions()}
        <Componnent01 />
        <Componnent01 name="sally" age={25} />
        {/* <Componnent01 name={"sally"} age={[25]} /> */}
        <br />
        <Container01 />
        <Container01 nickName="ly" />
        <br />
        {React.createElement(
          "button",
          { className: "App" },
          "React Div Element Created"
        )}
        <div style={styles}>Styling Effects</div>
        {this.x}
        <div style={customStyles.styles}>Styling From JS File</div>
        <hr />
        <button>Hover Over</button>
        <hr />
        <button onClick={() => this.increment()}>
          Increment Couter {this.state.counter}
        </button>
        <div>Div 1</div>
        <div>Div 2 {this.state.counter}</div>
        {React.createElement("div", { className: "App" }, var1.key1)}
        <div>{var1.key1}</div>
        {/* {console.log(this)} */}
      </div>
    );
  }
}

let appInstance = new App();
console.log(appInstance.x);
// console.log(appInstance);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         React
//       </header>
//       {/* {this.x} */}
//       {/* {console.log(this.x)} */}
//     </div>
//   );
// }

export default App;
