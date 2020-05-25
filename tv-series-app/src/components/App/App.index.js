import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Intro from "../Intro";
import axios from "axios";

class App extends React.Component {
  state = {
    series: [],
  };

  // Lifecycle Hooks
  componentDidMount() {
    // let series = ["Vikings", "Game Of Thrones"];
    // setTimeout(() => {
    //   this.setState({ series });
    //   // this.setState({ series: series });
    // }, 2000);

    // fetch("http://api.tvmaze.com/search/shows?q=:Vikings")
    axios("http://api.tvmaze.com/search/shows?q=:Vikings")
      .then((response) => {
        console.log(response);
        // let json = response.json();
        // console.log(json);
        return response.data;
        // response.data.json();
      })
      .then((data) => {
        // console.log(jsonResponse.data);
        console.log(data);
        // response.json(data);
        this.setState({ series: data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        {/* <Intro /> */}
        <Intro message="Here you can find all of your most loved tv series" />
        <p>The Length Of Series Array : {this.state.series.length}</p>
      </div>
    );
  }
}

// let Intro = (props) => {
//   <p>Our First Functrional Component</p>;
//   // <p className="App-intro">Our First Functional Component</p>;
//   // <p text="Is It" />;
//   // <p className="App-intro">Our First Functional Component</p>;
// };

// let Intro = () => {
//   return <p className="App-intro">Our First Functional Component</p>;
// };

// let intro = (props) => {
//   // <p>Our First Functional Component</p>;
//   <h1></h1>;
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <h1 className="App-title">TV Series List</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <intro />
//     </div>
//   );
// }

export default App;
