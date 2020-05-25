import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // Short Ciruit Operator Approacch
    // return (
    //   this.state.isLoggedIn && (
    //     <div>
    //       <h4>Howdy aBappy</h4>
    //     </div>
    //   )
    // );

    // Ternery Conditional Operator Approach
    return this.state.isLoggedIn ? (
      <div>
        <h4>Howdy aBappy</h4>
      </div>
    ) : (
      <div>
        <h4>Welcome Guests</h4>
      </div>
    );

    // Conditonal Element Variable Approach.
    // let message = "";
    // if (this.state.isLoggedIn) {
    //   message = <h4>Howdy aBappy</h4>;
    // } else {
    //   message = <h4>Welcome Guests</h4>;
    // }
    // return <div>{message}</div>;

    // If Else conditionals does not work within JSX, it's syntactical.
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h4>Howdy aBappy</h4>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h4>Welcome Guests</h4>
    //     </div>
    //   );
    // }

    // return (
    //   <div>
    //     <h4>Howdy aBappy</h4>
    //     <h4>Welcome Guests</h4>
    //   </div>
    // );
  }
}

export default UserGreeting;
