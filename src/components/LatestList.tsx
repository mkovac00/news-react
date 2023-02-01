import React, { useState, useEffect } from "react";
import "./LatestList.scss";

import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import Latest from "./Latest";
import Loading from "./Loading";

const LatestList = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=world&sortBy=publishedAt&pageSize=10&page=${currentPage}&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
        );

        setArticles(response.data.articles);
        setTotalResults(response.data.totalResults);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, []);

  const fetchMoreData = () => {
    incremenetPage();
    if (articles.length >= totalResults / 10) {
      setHasMore(false);
      return;
    }
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=world&sortBy=publishedAt&pageSize=10&page=${currentPage}&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
        );

        setArticles(articles.concat(response.data.articles));
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  };

  const incremenetPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="latest-container">
      <div className="latest-container-upper">
        <div className="live-circle"></div>
        <h3 className="latest-container-title">Latest news</h3>
      </div>
      <InfiniteScroll
        dataLength={currentPage * 10}
        next={fetchMoreData}
        hasMore={hasMore}
        height={500}
        loader={<Loading />}
        endMessage={<p>You've reached the end.</p>}
      >
        {articles.map((article) => (
          <Latest
            key={article.url}
            time={article.publishedAt.slice(11, 16)}
            title={article.title}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default LatestList;
