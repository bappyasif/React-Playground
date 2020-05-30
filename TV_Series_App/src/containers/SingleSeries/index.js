import React, { Component } from "react";
import Loader from "../../components/Loader";

// import { Router } from "react-router-dom";
import BackNavigation from "../../components/BackNavigation";

class index extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    fetch(
      `http://api.tvmaze.com/shows/${this.props.match.params.id}?embed=episodes`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ show: json });
      });
  }

  homePage = () => this.props.history.goBack();

  render() {
    let { show } = this.state;

    console.log(show);
    return (
      <div>
        {show === null && <Loader />}
        {show !== null && (
          <div>
            <p>{show.name}</p>
            <p>Premiered :: {show.premiered}</p>
            <p>Rating :: {show.rating.average}</p>
            <p>Episodes :: {show._embedded.episodes.length}</p>
            <p>
              <img alt={show.name} src={show.image.medium} />
            </p>
            <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
            {/* <p>Summary :: [innerHTML]={show.summary}</p> */}
          </div>
        )}
        <button onClick={this.homePage}>Home Page</button>
        {/* <button onClick={() => this.props.history.goBack()}>Home Page</button> */}
      </div>
    );
  }

  //   render() {
  //     console.log(this.props);
  //     return (
  //       <div>
  //         <p>Single Series -show id :{this.props.match.params.id}</p>
  //       </div>
  //     );
  //   }
}

// export class index extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <p>Single Series -show id :{this.props.match.params.id}</p>
//       </div>
//     );
//   }
// }

export default index;
