import React, { Component } from "react";
import { connect } from "react-redux";

import { createContact } from "../../redux/Actions";

export class Index extends Component {
  constructor(props) {
    super(props);

    this.state = { contacts: [] };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(ev) {
    ev.preventDefault();
    let contact = {
      Name: this.refs.contact_name.value,
      Number: this.refs.contact_number.value,
    };
    this.setState({ contacts: contact });
    console.log(this.state.contacts);
    // this.props.createInfo(this.state.contacts);
    this.props.createInfo(contact);
  }

  render() {
    // let listGenerated = this.props.contacts.map((a, b) => a.Name);
    let listGenerated = this.props.contactList.map((a, Idx) => (
      <p key={Idx}>
        {a.Name} {a.Number}
      </p>
    ));
    return (
      <div>
        <h4> Contact's Container</h4>
        <form onSubmit={this.submitHandler}>
          Name::
          <input type="text" ref="contact_name" />
          Mobile::
          <input type="text" ref="contact_number" />
          <button type="submit">Click Here</button>
        </form>
        <h4>Info Added</h4>
        <ul>{listGenerated}</ul>
        {/* <ul>{this.state.contacts}</ul> */}
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    contactList: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    createInfo: (contact) => dispatch(createContact(contact)),
    // createInfo: (contact) => dispatch(createContact.createContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
