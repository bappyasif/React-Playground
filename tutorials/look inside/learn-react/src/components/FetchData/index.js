import React, { Component } from "react";
import axios from "axios";

import "../../components/FetchData/style.css";
import Loading from "../Loading";
// import { DisplayLoading } from "../Loading";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       users: [],
  //       isLoading: false,
  //     };
  //   }

  getUsers() {
    this.setState({ isLoading: true });
    axios("https://randomuser.me/api/?nat=gb&results=5").then((response) => {
      console.log(response.data);
      this.setState({
        users: [...this.state.users, ...response.data.results],
        isLoading: false,
      });
    });
  }

  //   getUsers() {
  //     this.setState({ isLoading: true });
  //     axios("https://randomuser.me/api/?nat=gb&results=5").then((response) => {
  //       console.log(response.data);
  //       this.setState({
  //         users: response.data.results,
  //         isLoading: false,
  //       });
  //     });
  //   }

  handleSubmit(event) {
    event.preventDefault();
    this.getUsers();
    console.log("Users Loaded");
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    let { isLoading, users } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            border: "teal 2.2px solid",
            width: "fit-content",
            margin: "auto",
            height: "fit-content",
          }}
        >
          <input type="submit" value="Load Users" />
        </form>
        Fething Component
        <div>
          <hr />
          {!isLoading ? (
            users.map((user) => (
              <li className="list-items" key={user.id.value}>
                <h5>{user.name.first}</h5> <p>{user.cell}</p>
                <hr />
                {/* <img src={user.picture.small} width="200px" height="200px" /> */}
              </li>
            ))
          ) : (
            <Loading message="API Call In Progress...." />
          )}
        </div>
      </div>
    );
  }

  //   render() {
  //     return (
  //       <div>
  //         <form onSubmit={this.handleSubmit}>
  //           <input type="submit" value="Load Users" />
  //         </form>
  //         Fething Component
  //         <div>
  //           {!this.state.isLoading ? (
  //             this.state.users.map((user) => (
  //               <li className="list-items">
  //                 <h5>{user.name.first}</h5> <p>{user.cell}</p>
  //                 <hr />
  //                 {/* <img src={user.picture.small} width="200px" height="200px" /> */}
  //               </li>
  //             ))
  //           ) : (
  //             <Loading message="API Call In Progress...." />
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }

  //   render() {
  //     return (
  //       <div>
  //         Fething Component
  //         <div>
  //           {!this.state.isLoading ? (
  //             this.state.users.map((user) => (
  //               <li className="list-items">
  //                 <h5>{user.name.first}</h5> <p>{user.cell}</p>
  //                 <hr />
  //                 {/* <img src={user.picture.small} width="200px" height="200px" /> */}
  //               </li>
  //             ))
  //           ) : (
  //             <Loading message="API Call In Progress...." />
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }

  //   render() {
  //     return (
  //       <div>
  //         Fething Component
  //         <div>
  //           {!this.state.isLoading ? (
  //             this.state.users.map((user) => (
  //               <li className="list-items">
  //                 <h5>{user.name.first}</h5> <p>{user.cell}</p>
  //                 <hr />
  //                 {/* <img src={user.picture.small} width="200px" height="200px" /> */}
  //               </li>
  //             ))
  //           ) : (
  //             <Loading />
  //             // <DisplayLoading />
  //             // <h6>Loading</h6>
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }

  //   render() {
  //     return (
  //       <div>
  //         Fething Component
  //         <div>
  //           {!this.state.isLoading &&
  //             this.state.users.map((user) => (
  //               <li className="list-items">
  //                 <h5>{user.name.first}</h5> <p>{user.cell}</p>
  //                 <hr />
  //                 {/* <img src={user.picture.small} width="200px" height="200px" /> */}
  //               </li>
  //             ))}
  //         </div>
  //       </div>
  //     );
  //   }
}

export default index;
