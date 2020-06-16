import React from "react";

function index(props) {
  let items = [11, 22, 33, 44];
  let listItems = (
    <div>
      {items.map((item, idx) => (
        <ul>
          <li key={idx}>{item}</li>
        </ul>
      ))}
    </div>
  );

  return (
    <div>
      <h4>Rendering List</h4>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
      {listItems}
      {props.props ? listItems : "cant doos"}
    </div>
  );
}

export default index;
