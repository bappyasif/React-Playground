import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";

let initialState = {
  loading: true,
  error: "",
  post: {},
};

let reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Somethings Wrong",
      };

    default:
      return state;
  }
};

function DataFetchingWithReduceer() {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  });

  return (
    <div>
      <h4>Data Fetching Using useReducer</h4>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingWithReduceer;
