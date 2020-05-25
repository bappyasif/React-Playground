import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      another: 0,
    };
  }

  incrementCounter() {
    // With Function As Argument With Props As Argument
    this.setState((prevState, props) => ({
      count: prevState.count + parseInt(props.value),
      another: prevState.count + parseInt(props.value),
    }));
    // Asynchronous Call, it's -1 from state count.
    // It's called before state is being set.
    console.log(this.state.count);

    // With Function As Argument
    // this.setState((prevState) => ({
    //   count: prevState.count + 1,
    // }));
    // // Asynchronous Call, it's -1 from state count.
    // // It's called before state is being set.
    // console.log(this.state.count);

    // // With Callback Argument Option
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   // To See Change In Action Use This Callback Method To Get Updated Value.
    //   () => {
    //     console.log("Callback Value : " + this.state.count);
    //   }
    // );
    // // Asynchronous Call, it's -1 from state count.
    // // It's called before state is being set.
    // console.log(this.state.count);

    // Without Callback Argument Option
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // // Asynchronous Call, it's -1 from state count.
    // // It's called before state is being set.
    // console.log(this.state.count);

    // i tshould work within constructor function apart from that use setState Method
    // React Does Not Re Render UI Coimponnt While Accessig Directly.
    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);
  }

  // React calls multiple set state component and handles it as single update for better performancec
  // To counter this problem we need to pass in function in set state rather than object.
  incrementFive() {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  }

  // With Destructuring
  render() {
    let { count, another } = this.state;
    return (
      <div>
        <div>
          State Component :: Count : {count} {another}
        </div>
        ;{/* <div>State Component :: Count : {this.state.count}</div>; */}
        {/* <button onClick={() => this.incrementCounter()}>Incrment</button> */}
        <button onClick={() => this.incrementFive()}>Incrment</button>
      </div>
    );
  }

  // Without Destructuring
  //   render() {
  //     return (
  //       <div>
  //         <div>State Component :: Count : {this.state.count}</div>;
  //         {/* <button onClick={() => this.incrementCounter()}>Incrment</button> */}
  //         <button onClick={() => this.incrementFive()}>Incrment</button>
  //       </div>
  //     );
  //   }
}

export default Counter;
