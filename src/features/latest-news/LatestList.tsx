import { useState, useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./LatestList.scss";

import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import LatestCard from "./LatestCard";
import Loading from "../../components/Loading";

const { v4: uuidv4 } = require("uuid");

const LatestList = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=world&sortBy=publishedAt&pageSize=10&page=1&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
        );

        setArticles(response.data.articles);
        setTotalResults(response.data.totalResults);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
    incremenetPage(1);
  }, []);

  const fetchMoreData = () => {
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
    incremenetPage(1);
  };

  const incremenetPage = (amount: number) => {
    setCurrentPage((currPage) => {
      return currPage + amount;
    });
  };

  return (
    <div className="latest-list__container">
      <div className="latest-list__header">
        <div className="live-circle"></div>
        <h3 className="latest-list__title">Latest news</h3>
      </div>
      <InfiniteScroll
        dataLength={currentPage * 10}
        next={fetchMoreData}
        hasMore={hasMore}
        height={535}
        loader={<Loading />}
        endMessage={<p>You've reached the end.</p>}
      >
        {articles.map((article) => (
          <LatestCard
            key={uuidv4()}
            time={article.publishedAt.slice(11, 16)}
            title={article.title}
          />
        ))}
      </InfiniteScroll>
      <div className="latest-list__footer">
        <p className="latest-list__footer-text">See all news</p>
        <AiOutlineDoubleRight className="latest-list__footer-icon" />
      </div>
    </div>
  );
};

export default LatestList;
