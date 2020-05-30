import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

let SeriesListItems = ({ item }) => {
  return (
    <li>
      <Link to={`/series/${item.show.id}`}>{item.show.name}</Link>
    </li>
  );
  // return <li>{item.show.name}</li>;
  //   return <li key={item.show.id}>{item.show.name}</li>;
};

function index(props) {
  return (
    <div>
      <h4>Series List Component</h4>
      <ul className="series_list">
        {props.list.map((item) => (
          //   <li key={item.show.id}>{item.show.name}</li>
          <SeriesListItems item={item} key={item.show.id} />
        ))}
      </ul>
    </div>
  );
}

export default index;
