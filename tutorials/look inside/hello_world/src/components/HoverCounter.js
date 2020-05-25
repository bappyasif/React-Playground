import React, { Component } from "react";
// import UpdatedComponent from "./withCounter";
import withCounter from "./withCounter";

// With Parameter
class HoverCounter extends Component {
  render() {
    let { name, count, incrementCount } = this.props;
    return (
      <div>
        <h4 onMouseOver={incrementCount}>
          {name} Hovered {count} Many Times {this.props.exclam}
        </h4>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 7);

// Without Parameter
// class HoverCounter extends Component {
//     render() {
//       let { name, count, incrementCount } = this.props;
//       return (
//         <div>
//           <h4 onMouseOver={incrementCount}>
//             {name} Hovered {count} Many Times
//           </h4>
//         </div>
//       );
//     }
//   }

//   export default withCounter(HoverCounter);

// class HoverCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   hoverHandler = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   };

//   render() {
//     let count = this.state.count;
//     return (
//       <div>
//         <h4 onMouseOver={this.hoverHandler}>Hovered {count} Many Times</h4>
//       </div>
//     );
//   }
// }

// export default HoverCounter;
