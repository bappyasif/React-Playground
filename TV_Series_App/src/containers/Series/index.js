import React, { Component } from "react";
import "whatwg-fetch";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";

export class index extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false,
  };

  onSeriesInputChange = (event) => {
    this.setState({ seriesName: event.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ series: json, isFetching: false });
        // this.setState({ series: json });
      });
    // console.log(event);
    // console.log(event.target.value);
  };

  render() {
    let { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <h4>Series Container</h4>
        <Intro message={"Here you can find all of yous most loved TV Series"} />
        {/* <p>Length Of Current Series Array : : {this.state.series.length}</p> */}
        <div>
          <input
            type="text"
            value={seriesName}
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>Enter Your Series Name</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>No Shows Been Found</p>
        )}
        {isFetching && <p>Loading....</p> && <Loader />}
        {!isFetching && <SeriesList list={this.state.series} />}
        {/* <SeriesList list={this.state.series} /> */}
      </div>
    );
  }
}

// export class index extends Component {
//   state = {
//     series: [],
//   };

//   componentDidMount() {
//     fetch("http://api.tvmaze.com/search/shows?q=Vikings")
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((json) => {
//         console.log(json);
//         this.setState({ series: json });
//       });
//   }

//   onSeriesInputChange = (event) => {
//     console.log(event);
//     console.log(event.target.value);
//   };

//   render() {
//     return (
//       <div>
//         <h4>Series Container</h4>
//         <p>Length Of Current Series Array : : {this.state.series.length}</p>
//         <div>
//           <input type="text" onChange={this.onSeriesInputChange} />
//         </div>
//         <SeriesList list={this.state.series} />
//       </div>
//     );
//   }
// }

export default index;
