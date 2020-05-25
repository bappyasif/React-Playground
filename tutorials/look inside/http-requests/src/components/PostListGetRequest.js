import React, { Component } from "react";
import axios from "axios";

class PostListGetRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      erroMessage: "",
    };
  }

  // Executed Once Within Lifecycle
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          erroMessage: "Error While Receiving Data",
        });
      });
  }

  render() {
    let { posts, erroMessage } = this.state;
    return (
      <div>
        <h4> List Of Placeholder Posts</h4>
        {/* <li>{posts.map((post) => ({ post }))}</li> */}
        {/* {posts.length ? posts.map((post) => <div>{post.title}</div>) : null} */}
        {posts.length
          ? posts.map((post) => <li key={post.id}>{post.title}</li>)
          : null}
        {/* {posts.length ? (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <h6>{this.state.erroMessage}</h6>
        )} */}
        {erroMessage ? <h6>{erroMessage}</h6> : null}
      </div>
    );
  }
}

export default PostListGetRequest;
