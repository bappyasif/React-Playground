import React, { Component } from "react";

// Rendering Props Method Example

class ClickCounter2 extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} Many Times</button>
      </div>
    );
  }
}

export default ClickCounter2;

// Using Rendering Props Method

// class ClickCounter2 extends Component {
//   render() {
//     let count = this.state.count;
//     return (
//       <div>
//         <button onClick={this.incrementCount}>
//           Clicked {count} Many Times
//         </button>
//       </div>
//     );
//   }
// }

// export default ClickCounter2;

// Without Rendering Props Method

// class ClickCounter2 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   };
//   render() {
//     let count = this.state.count;
//     return (
//       <div>
//         <button onClick={this.incrementCount}>
//           Clicked {count} Many Times
//         </button>
//       </div>
//     );
//   }
// }

// export default ClickCounter2;
