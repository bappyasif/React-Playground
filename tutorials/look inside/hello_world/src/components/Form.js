import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleUserCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleFormTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    let { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h4>Form Component</h4>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={this.handleUserCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topics</label>
          <select value={topic} onChange={this.handleFormTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
            <option value="react_native">React Native</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
