import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetchingWithReduceer() {
  let initialState = {};
  let [loading, setLoading] = useState(true);
  let [errror, setError] = useState("");
  let [post, setPost] = useState(initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Somethings Wrong");
      });
  }, []);

  return (
    <div>
      <h4>Data Fetching Without useReducer</h4>
      {loading ? "Loading" : post.title}
      {errror ? errror : null}
    </div>
  );
}

export default DataFetchingWithReduceer;
