import React from "react";

// With Parameter
let withCounter = (WrappedComponent, incrementBy) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    countIncrementer = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementBy };
      });
    };

    render() {
      // let count = this.state.count;
      return (
        <WrappedComponent
          name="aBappy"
          count={this.state.count}
          incrementCount={this.countIncrementer}
          // exclam="!!"
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;

// With Spread Operator Usage
// let withCounter = (WrappedComponent) => {
//   class WithCounter extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         count: 0,
//       };
//     }

//     countIncrementer = () => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 };
//       });
//     };

//     render() {
//       // let count = this.state.count;
//       return (
//         <WrappedComponent
//           name="aBappy"
//           count={this.state.count}
//           incrementCount={this.countIncrementer}
//           // exclam="!!"
//           {...this.props}
//         />
//       );
//     }
//   }

//   return WithCounter;
// };

// export default withCounter;

// With Proper Naming Convention
// let withCounter = (WrappedComponent) => {
//   class WithCounter extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         count: 0,
//       };
//     }

//     countIncrementer = () => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 };
//       });
//     };

//     render() {
//       let count = this.state.count;
//       return (
//         <WrappedComponent
//           name="aBappy"
//           count={this.state.count}
//           incrementCount={this.countIncrementer}
//         />
//       );
//     }
//   }

//   return WithCounter;
// };

// export default withCounter;

// Without Proper Naming Convention

// let UpdateComponent = (OriginalComponent) => {
//   class newComponent extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         count: 0,
//       };
//     }

//     countIncrementer = () => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 };
//       });
//     };

//     render() {
//       let count = this.state.count;
//       return (
//         <OriginalComponent
//           name="aBappy"
//           count={this.state.count}
//           incrementCount={this.countIncrementer}
//         />
//       );
//     }
//   }

//   return newComponent;
// };

// export default UpdateComponent;
