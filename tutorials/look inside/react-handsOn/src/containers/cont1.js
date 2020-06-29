import React from "react";
import Comp1 from "../funtionalComponents/comp1";

class Container01 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stProp1: "Init State",
      stProp2: 9,
    };

    this.changeState = () => {
      this.setState((prevState, props) => ({
        stProp2: prevState.stProp2 + 2,
      }));
    };

    this.changeState02 = () => {
      this.setState({ stProp1: this.state.stProp1 + "[<>]" });
    };

    this.changeState03 = () => {
      this.setState({
        stProp1: this.state.stProp1 + "[<>]",
        stProp2: this.state.stProp2 + 2,
      });
    };

    this.changeStateWithoutPrev = () => {
      this.setState({ stProp1: "Changed State" });
    };
  }
  render() {
    return (
      <div>
        {/* {this.props === "ly" ? "A" : "B"} */}
        {this.props.nickName}
        {this.state.stProp1}
        {this.state.stProp2}
        <button onClick={() => this.changeState()}>Change Count</button>
        <button onClick={() => this.changeState02()}>Change State</button>
        <button onClick={() => this.changeState03()}>Change State</button>
        <button onClick={() => this.changeStateWithoutPrev()}>
          Change State
        </button>
        <Comp1 prop1={this.state.stProp2} />
        <Comp1 />
      </div>
    );
  }
}

export default Container01;
