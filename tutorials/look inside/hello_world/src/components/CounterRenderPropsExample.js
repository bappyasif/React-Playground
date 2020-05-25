import React, { Component } from "react";

// Using Children Rendering Method

class CounterRenderPropsExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.children(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default CounterRenderPropsExample;

// With Uing Rendering Method

// class CounterRenderPropsExample extends Component {
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
//     return (
//       <div>{this.props.render(this.state.count, this.incrementCount)}</div>
//     );
//   }
// }

// export default CounterRenderPropsExample;
