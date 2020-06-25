import React, { useState, useEffect } from "react";

function Index() {
  let [news, setNews] = useState([]);

  let [searchQuery, setSearchQuery] = useState("react");

  let [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react"
  );

  let [loading, setLoading] = useState(false);

  let fetchNews = () => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        // console.log(res.json());
        return res.json();
      })
      //   .then((data) => (setNews(data.hits), setLoading(false)))
      .then((data) => {
        console.log(data);
        setNews(data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // setLoading(false);
    fetchNews();
  }, [url]);

  //   useEffect(() => {
  //     fetchNews();
  //   }, [searchQuery]);

  let handleSearch = (ev) => {
    setSearchQuery(ev.target.value);
  };

  let handleSubmit = (ev) => {
    ev.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  let loadingStatus = () => (loading ? <h4>....LOADING....</h4> : "");

  let searcForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleSearch} />
        {/* <input type="submit" value="Search" /> */}
        <button>Search</button>
      </form>
    );
  };

  let newsTitles = () => news.map((item, idx) => <p key={idx}>{item.title}</p>);

  return (
    <div>
      <h4>Search News</h4>
      {loadingStatus()}
      {searcForm()}
      {newsTitles()}
    </div>
  );

  //   return (
  //     <div>
  //       <h4>{loading ? "....LOADING...." : ""}</h4>
  //       <form onSubmit={handleSubmit}>
  //         <input type="text" value={searchQuery} onChange={handleSearch} />
  //         <input type="submit" value="Search" />
  //         <button>Search</button>
  //       </form>
  //       {news.map((item, idx) => (
  //         <p key={idx}>{item.title}</p>
  //       ))}
  //     </div>
  //   );
}

export default Index;
