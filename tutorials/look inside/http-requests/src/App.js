import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostListGetRequest from "./components/PostListGetRequest";
import PostForm from "./components/PostForm";
import PutRequest from "./components/PutRequest";
import DeleteRequest from "./components/DeleteRequest";

function App() {
  return (
    <div className="App">
      <DeleteRequest />
      <PutRequest />
      <PostForm />
      <PostListGetRequest />
    </div>
  );
}

export default App;
