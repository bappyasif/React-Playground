import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";
// import Error from ""

let News = ({ news }) => {
  let [value, setValue] = useState({
    search: "react",
    coolMsg: "",
  });
  // let [searchQuery, setSearchQuery] = useState("react");

  let { search, coolMsg } = value;

  let handleChange = (name) => (ev) => {
    setValue({ ...value, [name]: ev.target.value });
  };

  // let handleChange = (ev) => {
  //   setSearchQuery(ev.target.value);
  // };

  let handleSubmit = (ev) => {
    ev.preventDefault();
    Router.push(`/news/?searchPhrase=${search}`);
    // Router.push(`/news/?searchPhrase=${searchQuery}`);
  };

  let searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={handleChange("search")} />
      <input
        type="text"
        placeholder="amaze yourself"
        onChange={handleChange("coolMsg")}
      />
      <button>Search News</button>
    </form>
  );

  // let searchForm = () => (
  //   <form onSubmit={handleSubmit}>
  //     <input type="text" value={searchQuery} onChange={handleChange} />
  //     <button>Search News</button>
  //   </form>
  // );

  return (
    <Layout mainHeading="Trending News">
      {coolMsg}
      <div>
        <hr />
        {searchForm()}
        <hr />
        <h4>News Found</h4>

        {/* {JSON.stringify(news)} */}
        <hr />
        {news.map((n, i) => (
          <p key={i}>
            <a href={n.url} target="_blank">
              {n.title}
            </a>
          </p>
        ))}
      </div>
    </Layout>
  );
};

News.getInitialProps = async ({ query }) => {
  let news;
  try {
    let res = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${query.searchPhrase}`
    );
    news = await res.json();
    console.log(news);
  } catch (error) {
    console.log(error);
    news = [];
  }
  return {
    news: news.hits,
    // news,
  };
};

export default News;

/**
 let News = ({ news }) => {
  return (
    <Layout mainHeading="Trending News">
      <div>
        <h4>News Found</h4>
        {/* {JSON.stringify(news)} /}
        <hr />
        {news.map((n, i) => (
          <p key={i}>
            <a href={n.url} target="_blank">
              {n.title}
            </a>
          </p>
        ))}
      </div>
    </Layout>
  );
};
 */

/**
 News.getInitialProps = async () => {
  let news;
  try {
    let res = await fetch("http://hn.algolia.com/api/v1/search?query=react");
    news = await res.json();
    console.log(news);
  } catch (error) {
    console.log(error);
    news = [];
  }
  return {
    news: news.hits,
    // news,
  };
};
 */
