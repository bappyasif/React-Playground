import React, { useState, useEffect } from "react";

function Index() {
  let [news, setNews] = useState([]);

  let [searchQuery, setSearchQuery] = useState("react");

  let fetchNews = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      // fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((response) => {
        // console.log(response);
        return response.json();
        // response.json();
        // return response.results;
      })
      .then((data) => {
        // console.log(data);
        setNews(data.hits);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchNews();
  }, [searchQuery]);

  let getNews = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          id="news_queries"
          placeholder="search news"
          onChange={getNews}
        />

        <input type="submit" value="Search" />
      </form>
      <h4>News Headlines</h4>
      <div>
        {news.map((n, i) => (
          <p key={i}>{n.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Index;
