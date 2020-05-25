import React, { Component } from "react";
// import UpdatedComponent from "./withCounter";
import withCounter from "./withCounter";

// With Parameter
class ClickCounter extends Component {
  render() {
    let { name, count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} Clicked {count} Many Times {this.props.exclam}
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);

// Without Parameter
// class ClickCounter extends Component {
//     render() {
//       let { name, count, incrementCount } = this.props;
//       return (
//         <div>
//           <button onClick={incrementCount}>
//             {name} Clicked {count} Many Times {this.props.exclam}
//           </button>
//         </div>
//       );
//     }
//   }

//   export default withCounter(ClickCounter);

// class ClickCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   clickHandler = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   };

//   render() {
//     let count = this.state.count;
//     return (
//       <div>
//         <button onClick={this.clickHandler}>Clicked {count} Many Times</button>
//       </div>
//     );
//   }
// }

// export default ClickCounter;
