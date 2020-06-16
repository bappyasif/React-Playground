import React, { Component } from "react";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subs: "Some Examples",
      count: 0,
    };

    this.state = {
      counter: 0,
      cond: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (ev) => {
    ev.preventDefault();
    // this.setState({ subs: "Saturday" });
    this.setState({ subs: "Saturday", count: 8 });
    console.log(ev.target.value);
    // console.log(this.state.count);
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ cond: !this.state.cond });
  };

  componentWillMount() {
    console.log("Component mounting");
    this.setState({ subs: "Sunday" });
    this.setState({ counter: 8 });
    this.setState({ subs: "Sunday!!", count: this.state.count + 1 });
    this.setState({ count: 1 });
  }

  componentDidMount() {
    // this.setState({ subs: "Sunday!!", count: this.state.count + 1 });
    // console.log(this.state.count);
    // this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
    console.log("Component mounted");
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log(prevState.counter);
    return true;
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("did update");
    // this.setState({ counter: this.state.counter + 2 });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeHandler} />
        <button type="button" onClick={this.changeHandler}>
          {this.state.subs} {this.state.count} {this.state.counter}
        </button>
        {this.state.cond ? "True State" : "False State"}
      </div>
    );
  }
}

export default index;
