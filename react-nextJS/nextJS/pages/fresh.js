import Router from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-fetch";

let Trends = ({ trends }) => {
  let [value, setValue] = useState({
    search: "react",
    shoutOut: "",
  });

  let { search, shoutOut } = value;

  let handleSubmit = (ev) => {
    ev.preventDefault();
    Router.push(`/fresh/?searchQuote=${search}`);
  };

  let handleChange = (name) => (ev) => {
    setValue({ ...value, [name]: ev.target.value });
  };

  let searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={handleChange("search")} />
      <input
        type="text"
        placeholder="Type okay"
        onChange={handleChange("shoutOut")}
      />
      <button>Search Trending</button>
    </form>
  );

  return (
    <Layout mainHeading="Find Your Trending News">
      {shoutOut}
      <div>
        {searchForm()}
        {trends.map((n, i) => (
          <p key={i}>
            <a href={n.url}>{n.title}</a>
          </p>
        ))}
      </div>
    </Layout>
  );
};

Trends.getInitialProps = async ({ query }) => {
  let trends;
  try {
    let res = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${query.searchQuote}`
    );
    trends = await res.json();
    console.log(trends);
  } catch (error) {
    console.log(error);
    trends: [];
  }

  return {
    trends: trends.hits,
  };
};

export default Trends;
