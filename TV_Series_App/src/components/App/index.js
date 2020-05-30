import React, { Component } from "react";
import "./App.css";

// import Intro from "../Intro";
// import "whatwg-fetch";

import Main from "../Main";
// import Series from "../../containers/Series";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series App</h1>
        </header>
        {/* <Intro message={"Here you can find all of yous most loved TV Series"} /> */}
        {/* <Series /> */}
        <Main />
      </div>
    );
  }
}

// class App extends Component {
//   state = {
//     series: [],
//   };

//   componentDidMount() {
//     fetch("http://api.tvmaze.com/search/shows?q=Vikings")
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((json) => {
//         console.log(json);
//         this.setState({ series: json });
//       });

//     // let series = ["Vikings", "Game Of Thrones"];
//     // setTimeout(() => {
//     //   this.setState({ series });
//     //   // this.setState({series: series});
//     // }, 1100);
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>TV Series App</h1>
//         </header>
//         <Intro message={"Here you can find all of yous most loved TV Series"} />
//         <p>Length Of Current Series Array : : {this.state.series.length}</p>
//         <Series />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>TV Series App</h1>
//       </header>
//       <Intro message={"Here you can find all of yous most loved TV Series"} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>TV Series App</h1>
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
