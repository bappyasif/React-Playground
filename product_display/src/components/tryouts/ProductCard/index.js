import React from "react";
import { Link } from "react-router-dom";

function index(props) {
  return (
    <div className="p-4 border-b-4 max-w-sm">
      <Link to={`/products/${props.product.id}`}>
        <div className="text-blue-500 text-2xl font-bold">
          {props.product.name}
        </div>
        <div
          style={{
            backgroundImage: `url(${props.product.images[0].imageUrl})`,
            width: 290,
            height: 290,
          }}
          className="bg-cover"
        ></div>
      </Link>
      <div className="font-bold text-2xl text-blue-500 p-2">
        {props.product.price}
      </div>
      <div className="text-blue-500 text-xl p-2">
        {props.product.description}
      </div>
      <Link
        to={`/products/${props.product.id}`}
        className="p-4 flex bg-blue-500 max-w-sm justify-center text-gray-400"
      >
        View
      </Link>
    </div>
  );
}

export default index;
