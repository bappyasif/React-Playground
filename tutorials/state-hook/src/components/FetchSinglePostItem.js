import React, { useState, useEffect } from "react";
import axios from "axios";

// With  A Click Button
function DataFetching() {
  let [post, setPost] = useState({});
  let [id, setId] = useState(1);
  let [idFromButrtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButrtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [idFromButrtonClick]);

  let handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <h4> Single Item Data Fetching </h4>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <h6>{post.title}</h6>
    </div>
  );
}

// Without Button
// function DataFetching() {
//   let [post, setPost] = useState({});
//   let [id, setId] = useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => {
//         console.log(response);
//         setPost(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, [id]);
//   return (
//     <div>
//       <h4> Single Item Data Fetching </h4>
//       <input
//         type="text"
//         value={id}
//         onChange={(event) => setId(event.target.value)}
//       />
//       <h6>{post.title}</h6>
//     </div>
//   );
// }

export default DataFetching;
