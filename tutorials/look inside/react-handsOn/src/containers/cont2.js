import React, { Component } from "react";

export class cont2 extends Component {
  arr1 = [
    { id: 1, text: "text uno", num: 1 },
    { id: 2, text: "text duos", num: 2 },
    { id: 3, text: "text thres", num: 3 },
    { id: 4, text: "text quatro", num: 4 },
  ];

  renderListitem = (props) => {
    return (
      <div>
        {props.item.id}
        <p>{props.item.text}</p>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.arr1.map((item) => (
          <this.renderListitem key={item.id} item={item} />
        ))}
        {/* {this.arr1.map((item, idx) => (
          <this.renderListitem key={idx} item={item} />
        ))} */}
        {this.arr1.map((item, idx) => console.log(item, idx))}
      </div>
    );
  }
}

export default cont2;
