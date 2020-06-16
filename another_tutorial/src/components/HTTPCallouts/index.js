import React, { Component } from "react";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //   HTTPStream = () => {
  //     let url = "https://jsonplaceholder.typicode.com/todos/2";
  //     fetch(url)
  //       .then((res) => {
  //         let reader = res.body.getReader();
  //         console.log(reader.read());
  //         reader.read();
  //       })
  //       .then((res) => console.log(res));
  //   };

  HTTPCall = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((obj) => console.log(obj));
  };

  fetchingHTTP = () => {
    let url = `https://jsonplaceholder.typicode.com/todos/${this.refs.param.value}`;
    // console.log(url);
    // let url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
      .then((response) =>
        response.json().then((data) => ({
          body: data,
        }))
      )
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  //   httpFetch = () => {
  //     let apiEndpoint = "https://jsonplaceholder.typicode.com/todos/1";
  //     fetch(apiEndpoint, { method: "GET" })
  //       .then((response) => {
  //         console.log(response);
  //         console.log(response.json());
  //         // return response.json();
  //         // return response.clone().json();
  //         // console.log(response.body.locked("false").json());
  //         // return response.body.json();
  //         // console.log(JSON.parse(response.json()));
  //         // response.body.json();
  //         // console.log(JSON.stringify(response.body.json));
  //         // console.log(response.body.json());
  //         return response.json();
  //       })
  //       .then((returnedResponse) => {
  //         console.log(JSON.parse(returnedResponse.message));
  //         // console.log(returnedResponse);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   };
  1;
  render() {
    return (
      <div>
        <label>Which Todo's ??</label>
        <input type="text" ref="param" />
        <button type="button" onClick={this.fetchingHTTP}>
          Fetch Todo's
        </button>
        {/* <button type="button" onClick={this.httpFetch}>
          Fetch Todo's
        </button> */}
      </div>
    );
  }
}

export default index;
