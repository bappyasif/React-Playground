import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  let [posts, setPosts] = useState([]);
  let reducedData = [];

  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts")
      .get("https://jsonplaceholder.typicode.com/posts/?_limit=11")
      //   .get("https://jsonplaceholder.typicode.com/posts/", {
      //     params: {
      //       limit: 11,
      //       //   results: 11,
      //     },
      //   })
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4> Data Fetching </h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
