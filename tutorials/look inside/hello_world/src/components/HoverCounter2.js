import React, { Component } from "react";

// Rendering Props Method Example
class HoverCounter2 extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return (
      <div>
        <h4 onMouseOver={incrementCount}>
          {/* Hovered {this.state.count} Many Times */}
          Hovered {count} Many Times
        </h4>
      </div>
    );
  }
}

export default HoverCounter2;

// Using Rendering Props Method
// class HoverCounter2 extends Component {
//   render() {
//     let { count } = this.state;
//     return (
//       <div>
//         <h4 onMouseOver={this.incrementCount}>
//           {/* Hovered {this.state.count} Many Times */}
//           Hovered {count} Many Times
//         </h4>
//       </div>
//     );
//   }
// }

// export default HoverCounter2;

// Without Rendering Props Method

// class HoverCounter2 extends Component {
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
//     let { count } = this.state;
//     return (
//       <div>
//         <h4 onMouseOver={this.incrementCount}>
//           {/* Hovered {this.state.count} Many Times */}
//           Hovered {count} Many Times
//         </h4>
//       </div>
//     );
//   }
// }

// export default HoverCounter2;
