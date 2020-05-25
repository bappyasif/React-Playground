import React, { Component, PureComponent } from "react";
import RegularComp from "./RegularComponent";
import PureComp from "./PureComponent";
import MemoComp from "./MemoComp";

// Memo Component
class ComponentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "aBappy",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "aBappy",
      });
    }, 2000);
  }

  render() {
    console.log("*********Parent Component Render*********");
    return (
      <div>
        <MemoComp name={this.state.name} />
        <h4>Parent Component</h4>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

// PureComponent Reduce Unnecessary Rendering
// class ComponentContainer extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "aBappy",
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         name: "aBappy",
//       });
//     }, 2000);
//   }

//   render() {
//     console.log("*********Parent Component Render*********");
//     return (
//       <div>
//         <h4>Parent Component</h4>
//         <RegularComp name={this.state.name} />
//         <PureComp name={this.state.name} />
//       </div>
//     );
//   }
// }

// Component Gets Always Rendered
// class ComponentContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "aBappy",
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         name: "aBappy",
//       });
//     }, 2000);
//   }

//   render() {
//     console.log("*********Parent Component Render*********");
//     return (
//       <div>
//         <h4>Parent Component</h4>
//         <RegularComponent name={this.state.name}></RegularComponent>
//         <PureComponeent name={this.state.name}></PureComponeent>
//       </div>
//     );
//   }
// }

export default ComponentContainer;
