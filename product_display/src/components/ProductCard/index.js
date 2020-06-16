import React from "react";
import { Link } from "react-router-dom";

function index(props) {
  return (
    <div>
      <Link to={`/product/${props.product.id}`}>
        <div
          style={{
            backgroundImage: `url(${props.product.images[1].imageUrl})`,
            width: 200,
            height: 200,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
        <div className="font-bold mb-4">{props.product.name}</div>
      </Link>
      <div className="font-bold mb-4">{props.product.price}</div>
      <div className="text-2xl mb-4">{props.product.description}</div>

      <Link
        to={`/product/${props.product.id}`}
        className="bg-blue-500 text-white p-2 flex justify-center"
      >
        View
      </Link>
    </div>
  );
}

export default index;
