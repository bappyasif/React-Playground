import React, { useState, useEffect } from "react";
import LoaderGif from "../../components/LoaderGifs";

function ControlingUseEffectHook() {
  let [news, setNews] = useState([]);

  let [searchQuery, setSearchQuery] = useState("react");

  let [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react"
  );

  let [loading, setLoading] = useState(false);

  let fetchNews = () => {
    // setLoading(true);
    setLoading(true);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data.hits, setLoading(false));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   let fetchNews = () => {

  //       fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setNews(data.hits);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   };

  useEffect(() => {
    fetchNews();
  }, [url]);

  let getNews = (event) => {
    setSearchQuery(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };

  let renderLoading = () => {
    return loading ? <LoaderGif /> : "";
  };

  let renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="news_queries"
          placeholder="search news"
          onChange={getNews}
        />

        <input type="submit" value="Search" />
      </form>
    );
  };

  let renderNews = () => {
    return (
      <div>
        {news.map((n, i) => (
          <p key={i}>{n.title}</p>
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderForm()}
      <h4>News Headlines</h4>
      {renderLoading()}
      {renderNews()}
    </div>
  );

  //   return (
  //     <div>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="text"
  //           id="news_queries"
  //           placeholder="search news"
  //           onChange={getNews}
  //         />

  //         <input type="submit" value="Search" />
  //       </form>
  //       <h4>News Headlines</h4>
  //       {loading ? "LOADING...." : ""}
  //       <div>
  //         {news.map((n, i) => (
  //           <p key={i}>{n.title}</p>
  //         ))}
  //       </div>
  //     </div>
  //   );
}

export default ControlingUseEffectHook;
