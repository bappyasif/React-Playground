import React, { Component } from "react";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: [],
      name: "",
      type: "",
      region: "",
    };
  }

  submitHandler = (ev) => {
    ev.preventDefault();
    let acnt = this.state.account;
    acnt.push({
      name: this.state.name,
      type: this.state.type,
      // region: this.state.region,
      region: this.refs.accRegion.value,
    });
    this.setState({ account: acnt });
    console.log(this.state.account);
  };

  changeHandler = (ev) => {
    ev.target.name === "acc_name"
      ? this.setState({ name: ev.target.value })
      : this.setState({ type: ev.target.value });

    console.log(this.refs.accName.value, this.refs.accType.value);
  };

  changeHandlerWithRefs = () => {
    // this.setState({ type: ev.target.value });
    // console.log(this.state.type);
    this.setState({ type: this.refs.accRegion.value });
    console.log(this.state.region);
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
          <label>Account Region :: </label>
          <input type="text" ref="accRegion" />
          {/* <label>Account Region :: </label>
          <input
            type="text"
            onChange={this.changeHandlerWithRefs}
            ref="accRegion"
          /> */}
          <label>Account Type :: </label>
          <select name="acc_type" onChange={this.changeHandler} ref="accType">
            <option value="default">choose type</option>
            <option value="Wholesale">Wholesale</option>
            <option value="Retail">Retail</option>
            <option value="Banking">Banking</option>
            <option value="Personal">Personal</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default index;
