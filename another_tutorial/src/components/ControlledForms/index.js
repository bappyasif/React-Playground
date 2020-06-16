import React, { Component } from "react";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: [],
      name: "",
      type: "",
    };

    // this.changeHandler02 = this.changeHandler02.bind(this);
  }

  submitHandler = (ev) => {
    ev.preventDefault();
    let acnt = this.state.account;
    acnt.push({ name: this.state.name, type: this.state.type });
    this.setState({ account: acnt });
    console.log(this.state.account);
  };

  changeHandler01 = (ev) => {
    this.setState({ name: ev.target.value });
    // console.log(this.state.name);
  };

  changeHandler02 = (ev) => {
    this.setState({ type: ev.target.value });
    // console.log(this.state.type);
  };

  changeHandler = (ev) => {
    ev.target.name === "acc_name"
      ? this.setState({ name: ev.target.value })
      : this.setState({ type: ev.target.value });

    console.log(this.refs.accName.value, this.refs.accType.value);
  };

  render() {
    return (
      <div>
        <h4>Controlled Form</h4>
        <form onSubmit={this.submitHandler}>
          <label>Account Name :: </label>
          <input
            type="text"
            name="acc_name"
            value={this.state.name}
            onChange={this.changeHandler}
            ref="accName"
          />
          <label>Account Type :: </label>
          <select name="acc_type" onChange={this.changeHandler} ref="accType">
            <option value="default">choose type</option>
            <option value="Wholesale">Wholesale</option>
            <option value="Retail">Retail</option>
            <option value="Banking">Banking</option>
            <option value="Personal">Personal</option>
          </select>

          {/*
          <label>Account Name :: </label>
           <input
            type="text"
            name="acc_name"
            value={this.state.name}
            onChange={this.changeHandler01}
          />
          <label>Account Type :: </label>
          <select name="acc_type" onChange={this.changeHandler02}>
            <option value="default">choose type</option>
            <option value="Wholesale">Wholesale</option>
            <option value="Retail">Retail</option>
            <option value="Banking">Banking</option>
            <option value="Personal">Personal</option>
          </select> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default index;
